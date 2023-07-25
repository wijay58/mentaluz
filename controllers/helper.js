const axios = require('axios');

exports.makeRequest = (data, res) => {
  axios.post(process.env.OPEN_AI_URL, data)
    .then(response => {
      return res.status(200).json(response.data);
    })
    .catch(error => {
      return res.status(500).json({ message: "Internal Server Error, Please try again." });
    })
}

exports.openAIRequest = (data) => {
  return new Promise((resolve, reject) => {
    axios.post("https://api.openai.com/v1/chat/completions", data, { headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` } })
      .then(response => {
        resolve(response.data.choices[0].message)
      })
      .catch(error => {
        reject(error);
      })
  })
}