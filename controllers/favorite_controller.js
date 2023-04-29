const Favorite = require("../models/favorite")

exports.create_favorite = function (req, res) {
  console.log(req.userData)
  let favorite = new Favorite({
    user: req.userData.id,
    task: req.body.task,
    response: req.body.response
  });
  favorite.save(function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(favorite)
    }
  })
};