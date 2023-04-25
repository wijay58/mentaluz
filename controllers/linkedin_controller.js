const helper = require('./helper.js');

exports.linkedin_post = async function (req, res) {
  const { topic } = req.body;

  const data = {
    prompt: "LinkedIn Post",
    user_response: `Write a LinkedIn post about ${topic} that engages the user with a fact or some captivating statistic in the beginning of the post.`
  }
  helper.makeRequest(data, res);
}

exports.linkedin_outreach = async function (req, res) {
  const { clientSpecifics, product, goal } = req.body;

  const data = {
    prompt: "Outreach New client",
    user_response: `Write a cold outreach message for a new potential client for ${product}. The message will be sent to someone who ${clientSpecifics}. The goal of the message is ${goal} so add a call to action for that.`
  }
  helper.makeRequest(data, res);
}

exports.linkedin_response = async function (req, res) {
  const { message, tone } = req.body;

  const data = {
    prompt: "Response to LinkedIn Post",
    user_response: `Create a response that is an answer to ${message}. Make the tone of voice in the message ${tone}.`
  }
  helper.makeRequest(data, res);
}

exports.linkedin_growthStrategy = async function (req, res) {
  const { information } = req.body;

  const data = {
    prompt: "Growth Strategy (Marketing)",
    user_response: `Write a growth strategy for a business or person on LinkedIn. The person or business information is ${information}.`
  }
  helper.makeRequest(data, res);
}

exports.linkedin_adCopy = async function (req, res) {
  const { product, benefits, customerPersona } = req.body;

  const data = {
    prompt: "LinkedIn Ad Copy",
    user_response: `Write an ad copy for ${product} that has ${benefits} for LinkedIn. The should be targeted towards people who ${customerPersona}.`
  }
  helper.makeRequest(data, res);
}