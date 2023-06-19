const Specialist = require("../models/specialist")

exports.create_specialist = function (req, res) {
  console.log(req.userData)
  let specialist = new Specialist({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    info: req.body.info
  });
  specialist.save(function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(specialist)
    }
  })
};

exports.get_specialists = function (req, res) {
  Specialist.find({}, function (err, specialists) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(specialists)
    }
  })
}