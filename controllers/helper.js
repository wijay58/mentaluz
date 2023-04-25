const axios = require('axios');

exports.makeRequest = (data,res) => {
  axios.post(process.env.OPEN_AI_URL, data)
  .then(response => {
    return res.status(200).json(response.data);
  })
  .catch(error => {
    return res.status(500).json({ message: "Internal Server Error, Please try again." });
  })
}