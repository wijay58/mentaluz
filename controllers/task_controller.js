const Task = require("../models/task")

exports.create_task = function (req, res) {
  let task = new Task({
    name: req.body.name,
    task: req.body.task,
    formFields: req.body.formFields,
    text: req.body.text,
    group: req.body.group
  });
  task.save(function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(task)
    }
  })
};

exports.get_tasks = function (req, res) {
  const { group } = req.query;
  const queryGroup = group.toLowerCase();
  Task.find({ group: queryGroup }, function (err, tasks) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(tasks)
    }
  })
};
