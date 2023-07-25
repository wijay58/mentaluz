const helper = require('./helper.js');
const axios = require('axios');

exports.chat = async function (req, res) {
  const { message, conversation } = req.body;

  try {
    conversation.push({ "role": "user", "content": message });

    const data = {
      "model": "gpt-3.5-turbo",
      "messages": conversation
    }

    const response = await helper.openAIRequest(data);
    conversation.push(response);
    return res.status(200).json({ message: response.content, conversation });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal Server Error, Please try again." });
  }
}

exports.youtube_title = async function (req, res) {
  const { titles, topic } = req.body;

  const data = {
    prompt: "Youtube Video Title",
    user_response: `Generate ${titles} ideas for a youtube video title about ${topic} with a mix of keywords that the people of ${topic} find interesting.`
  }
  helper.makeRequest(data, res);
}

exports.youtube_script = async function (req, res) {
  const { words, topic } = req.body;

  const data = {
    prompt: "Youtube Video Script",
    user_response: `Write a youtube script about ${words} that has a captivating hook that resonates with people who are interested in ${topic}. The video should be about ${topic}.`
  }
  helper.makeRequest(data, res);
}

exports.youtube_description = async function (req, res) {
  const { topic } = req.body;

  const data = {
    prompt: "Youtube Video Description",
    user_response: `Write a video description for a video that is about ${topic}.`

  }
  helper.makeRequest(data, res);
}

exports.youtube_channelDescription = async function (req, res) {
  const { topic } = req.body;

  const data = {
    prompt: "Youtube Channel Description",
    user_response: `Write a description for a youtube channel. The channel is about ${topic}. Do not exceed 150 words.`

  }
  helper.makeRequest(data, res);
}

exports.youtube_longKeyword = async function (req, res) {
  const { amount, topic } = req.body;

  const data = {
    prompt: "Youtube Long Keywords",
    user_response: `Write a list of ${amount} long keywords for ${topic} that include search terms and questions.`

  }
  helper.makeRequest(data, res);
}

exports.youtube_shortKeyword = async function (req, res) {
  const { amount, topic } = req.body;

  const data = {
    prompt: "Youtube Long Keywords",
    user_response: `Write a list of ${amount} about ${topic} that are short and terms that the audience for ${topic} searches on a frequent basis.`

  }
  helper.makeRequest(data, res);
}