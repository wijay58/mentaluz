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
    mode: 'payment',
    success_url: `https://mentaluz.com/payment/success/?some=sdsdsdsdsdsdsdsd`,
    cancel_url: `${process.env.CLIENT_URL}/payment/failed`,
  });

  res.status(200).json({ url: session.url });
}

exports.validate_session = async function (req, res) {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    res.status(200).json({ session });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}