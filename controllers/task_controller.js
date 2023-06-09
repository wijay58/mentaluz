const groupBy = require("lodash.groupby");
const Task = require("../models/task")

exports.create_task = function (req, res) {
  let task = new Task({
    name: req.body.name,
    task: req.body.task,
    formFields: req.body.formFields,
    text: req.body.text,
    group: req.body.group,
    specialist: req.body.specialist
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

exports.update_task = function (req, res) {
  Task.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'}, function (err, task) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(task)
    }
  })
};

exports.update_tasks = function (req, res) {
  Task.updateMany({group:"general"}, req.body, function (err, task) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(task)
    }
  })
};

exports.get_tasks_groups_by_specialist = function (req, res) {
  const { specialist } = req.query;
    Task.find({ specialist }, function (err, tasks) {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      } else {
        const resGroups = groupBy(tasks, "group")
        return res.send(Object.keys(resGroups))
      }
    })
};


exports.get_tasks = function (req, res) {
  let queryGroup;
  const { group } = req.query;
  if (group) {
    queryGroup = group.charAt(0).toLowerCase() + group.slice(1);
    Task.find({ group: queryGroup }, function (err, tasks) {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      } else {
        return res.send(tasks)
      }
    })
  } else {
    Task.find({}, function (err, tasks) {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      } else {
        return res.send(tasks)
      }
    })
  }
};
