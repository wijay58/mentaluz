const axios = require('axios');

const makeRequest = (data,res) => {
  axios.post(process.env.OPEN_AI_URL, data)
  .then(response => {
    return res.status(200).json(response.data);
  })
  .catch(error => {
    return res.status(500).json({ message: "Internal Server Error, Please try again." });
  })
}

exports.youtube_title = async function (req, res) {
  const { titles, topic } = req.body;
  
  const data = {
    prompt: "Youtube Video Title",
    user_response: `Generate ${titles} ideas for a youtube video title about ${topic} with a mix of keywords that the people of ${topic} find interesting.`
  }
  makeRequest(data,res);
}

exports.youtube_script = async function (req, res) {
  const { words, topic } = req.body;
  
  const data = {
    prompt: "Youtube Video Script",
    user_response: `Write a youtube script about ${words} that has a captivating hook that resonates with people who are interested in ${topic}. The video should be about ${topic}.`
  }
  makeRequest(data,res);
}

exports.youtube_description = async function (req, res) {
  const { topic } = req.body;
  
  const data = {
    prompt: "Youtube Video Description",
    user_response: `Write a video description for a video that is about ${topic}.`

  }
  makeRequest(data,res);
}