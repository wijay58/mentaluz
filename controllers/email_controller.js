const helper = require('./helper.js');

exports.email_welcome = async function (req, res) {
  const { company, product, tone } = req.body;

  const data = {
    prompt: "Welcome Email",
    user_response: `Write an welcome email for when someone signs up for a newsletter. The email is for a ${company} that sells ${product}. The tone of voice should be ${tone}.`
  }
  helper.makeRequest(data, res);
}

exports.email_newsletter = async function (req, res) {
  const { news, description } = req.body;

  const data = {
    prompt: "Newsletter Email",
    user_response: `Write an email newsletter with additional 3 options for an attention grabbing headline. The news that needs to be covered is ${news} for a company that ${description}.`
  }
  helper.makeRequest(data, res);
}

exports.email_confirm_purchase = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Confirm Purchase Email",
    user_response: `Write an email to confirm a customer's purchase. The product that was purchased is ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.email_event_promotion = async function (req, res) {
  const { event, link } = req.body;

  const data = {
    prompt: "Event Promotion Email",
    user_response: `Write an email for an event that is about ${event}. Include the time and place and a call to action for clicking on a link, where the link needs to go write ${link}.`
  }
  helper.makeRequest(data, res);
}

exports.email_cold_outreach = async function (req, res) {
  const { offer, description } = req.body;

  const data = {
    prompt: "Cold Outreach Email",
    user_response: `Write a cold outreach email for a ${description} that offers ${offer}. The email should provide some type of information or value for the person who will read it. Add 3 attention grabbing headline ideas.`
  }
  helper.makeRequest(data, res);
}

exports.email_launching_soon = async function (req, res) {
  const { titles, topic } = req.body;

  const data = {
    prompt: "Launching Soon Email",
    user_response: `Create a email with ${titles} title options about a launch for ${topic}. The goal of the email is to build anticipation for ${topic}.`
  }
  helper.makeRequest(data, res);
}

exports.email_giveaway = async function (req, res) {
  const { titles, price } = req.body;

  const data = {
    prompt: "Contest/Giveaway Email",
    user_response: `Write an email about a giveaway. Create ${titles} titles for the email that engage the receiver. The email should be about ${price}.`
  }
  helper.makeRequest(data, res);
}

exports.email_referral = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Referral Email",
    user_response: `Write an email that engages users to refer their family and friends for ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.email_crisis_management = async function (req, res) {
  const { crisis } = req.body;

  const data = {
    prompt: "Crisis Management Email",
    user_response: `Write an email to send out to customers because ${crisis}. The email should comfort the reader and reassure them.`
  }
  helper.makeRequest(data, res);
}

exports.email_pain_point = async function (req, res) {
  const { customer, action, product, painPoint } = req.body;

  const data = {
    prompt: "Pain Point for Customer Email",
    user_response: `I'm looking for an email that will speak directly to the needs and pain points of my ${customer} and persuade them to take ${action} with a sense of urgency and strong offer. The product that we offer is ${product} and we solve ${painPoint}.`
  }
  helper.makeRequest(data, res);
}

exports.email_product_promotion = async function (req, res) {
  const { customer, product } = req.body;

  const data = {
    prompt: "Product Promotion Email",
    user_response: `I need a email that will promote a product that will make my ${customer} feel intrigued about my ${product} and persuade them to click the buy button link with a sense of urgency.`
  }
  helper.makeRequest(data, res);
}