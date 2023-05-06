const User = require("../models/user");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.checkout = async function (req, res) {
  // const { amount } = req.body;
  const storeItem = new Map([
    [1, { priceInCents: 10000, name: 'Mentaluz Premium' }]
  ])

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data: {
          currency: 'usd',
          product_data: {
            name: storeItem.get(1).name,
          },
          unit_amount: storeItem.get(1).priceInCents,
        },
        quantity: 1,
      },
    ],
    customer_email: req.userData.email,
    payment_intent_data: {
      metadata: {
        email: req.userData.email,
      },
    },
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/payment/success`,
    cancel_url: `${process.env.CLIENT_URL}/payment/failed`,
  });

  res.status(200).json({ url: session.url });
}

validate_session = async function (id) {
  try {
    const session = await stripe.checkout.sessions.retrieve(id);
    return session;
  } catch (err) {
    return false
  }
}

exports.stripe_webhook = async function (req, res) {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.WEBHOOK_SECRET;
  const payloadString = JSON.stringify(req.body, null, 2);
  const header = stripe.webhooks.generateTestHeaderString({
    payload: payloadString,
    secret: endpointSecret,
  });

  let event;

  try {
    event = stripe.webhooks.constructEvent(payloadString, header, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'checkout.session.async_payment_failed':
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      return res.status(400).json({ message: 'Payment failed' });
      break;
    case 'payment_intent.succeeded':
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      console.log(req.body.data)
      User.findByIdAndUpdate((req.body.data.object.metadata.email), { premium: true }, { returnDocument: 'after' }, async function (err, updatedUser) {
        if (err) return res.status(500).send('Update failed');
        else {
          return res.status(200).json({
            message: 'Payment Successful',
            user: updatedUser
          });
        }
      });
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}