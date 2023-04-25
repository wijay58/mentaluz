const helper = require('./helper.js');

exports.facebook_ad_engage = async function (req, res) {
  const { customer, product } = req.body;

  const data = {
    prompt: "Facebook Ad Copywriter (Engage)",
    user_response: `I need a Facebook ad copy that will engage my ${customer} with a unique and creative visual campaign that showcases the features and benefits of my ${product} in a compelling way.`
  }
  helper.makeRequest(data, res);
}

exports.facebook_ad_fomo = async function (req, res) {
  const { customer, product } = req.body;

  const data = {
    prompt: "Facebook Ad Copywriter (Fomo)",
    user_response: `I need a Facebook ad copy that will create a sense of urgency and FOMO for my ${customer} by featuring exclusive deals and promotions for my ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.facebook_ad_authority = async function (req, res) {
  const { customer, product, influencer } = req.body;

  const data = {
    prompt: "Facebook Ad Copywriter (Authority)",
    user_response: `I need a Facebook ad copy that will leverage the authority and credibility of ${influencer} to educate my ${customer} on the benefits of my ${product} and persuade them to try it out for themselves.`
  }
  helper.makeRequest(data, res);
}

exports.facebook_write_post = async function (req, res) {
  const { subject, tone } = req.body;

  const data = {
    prompt: "Facebook Write a Post",
    user_response: `Write an engaging Facebook post about ${subject} that is ${tone}.`
  }
  helper.makeRequest(data, res);
}

exports.facebook_profile_description = async function (req, res) {
  const { company } = req.body;

  const data = {
    prompt: "Facebook Profile Description",
    user_response: `Write a Facebook profile description for ${company}.`
  }
  helper.makeRequest(data, res);
}

exports.facebook_content_strategy = async function (req, res) {
  const { company, keyword, words, date, product } = req.body;

  const data = {
    prompt: "Facebook Content Strategy",
    user_response: `Create a content publishing calendar for a week with 2 content ideas every day that cover ${keyword}. Include the recommended word count of ${words} words and publishing date of ${date}. The content is for Facebook, give a mix of informative photos, text and video ideas. Include ${product} for ${company}.`
  }
  helper.makeRequest(data, res);
}
