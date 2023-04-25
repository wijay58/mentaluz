const helper = require('./helper.js');

exports.twitter_valuable_thread = async function (req, res) {
  const { cutsomer, subject } = req.body;
  
  const data = {
    prompt: "Twitter Thread (Valuable Content)",
    user_response: `I'm looking for a Twitter thread idea that will provide valuable and relevant information to my ${cutsomer} about ${subject} and attract high-quality leads with a strong call-to action.`
  }
  helper.makeRequest(data,res);
}

exports.twitter_viral_thread = async function (req, res) {
  const { product } = req.body;
  
  const data = {
    prompt: "Twitter Thread (Product to Go Viral)",
    user_response: `I need a Twitter thread idea that will both go viral and attract high-quality leads for my ${product} with a strong call-to-action and compelling visuals.`
  }
  helper.makeRequest(data,res);
}

exports.twitter_overcome_objections = async function (req, res) {
  const { product, cutsomer, action } = req.body;
  
  const data = {
    prompt: "Twitter Thread (Overcome Objections)",
    user_response: `I need a Twitter thread idea that will overcome objections and concerns my ${cutsomer} may have about my ${product} and convince them to take ${action} with a sense of urgency.`
  }
  helper.makeRequest(data,res);
}