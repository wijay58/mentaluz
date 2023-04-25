const helper = require('./helper.js');

exports.instagram_profile_description = async function (req, res) {
  const { information } = req.body;

  const data = {
    prompt: "Instragram Profile Description",
    user_response: `Write a short 150 word max profile description for a ${information}.`
  }
  helper.makeRequest(data, res);
}

exports.instagram_content_strategy = async function (req, res) {
  const { product, topic } = req.body;

  const data = {
    prompt: "Instragram Content Strategy",
    user_response: `Write a 7-day content strategy for a business that offers ${product} and will inform or write about ${topic}.`
  }
  helper.makeRequest(data, res);
}

exports.instagram_content_calendar = async function (req, res) {
  const { content, keyword } = req.body;

  const data = {
    prompt: "Instragram Content Calendar",
    user_response: `I'd like you to help me come up with a content schedule for my ${content} that has the best chance of helping me rank for long tail keywords that are specific to my keyword which is ${keyword}. Please target transaction style search terms only. Please come up with clickbait style titles for these blog posts. Please organize each blog post title in a nice looking table so that it looks like a calendar. Each week should be separated into its own table.`
  }
  helper.makeRequest(data, res);
}

exports.instagram_promote_product = async function (req, res) {
  const { topic } = req.body;

  const data = {
    prompt: "Instragram Promote Product",
    user_response: `Generate an Instagram post idea for ${topic} describe what should be in the video or photo.`
  }
  helper.makeRequest(data, res);
}

exports.instagram_outreach_influencer = async function (req, res) {
  const { topic, tone, offer } = req.body;

  const data = {
    prompt: "Instragram Outreach Influencer",
    user_response: `Generate an outreach cold dm for someone for a product or service that ${topic}. The dm should be short and captivate the influencer's attention in the first few words. The overall tone of voice should be ${tone} and the call to action or special offer for the influencer is ${offer}.`
  }
  helper.makeRequest(data, res);
}