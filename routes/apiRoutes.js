var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/workout", function(req, res) {
    db.Workout.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/workout", function (req, res) {
    console.log(req.body);
    db.Workout.create({
      exercise: req.body.exercise,
      reps: req.body.reps,
      sets: req.body.sets,
      weight: req.body.weight
    }).then(function(data) {
      res.json(data);
    });
  });

  // Delete an example by id
  app.delete("/api/workout/:id", function (req, res) {
    db.Workout.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });

  //Updating
  app.put("/api/todos", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Workout.update({
      exercise: req.body.exercise,
      reps: req.body.reps,
      sets: req.body.sets,
      weight: req.body.weight
    }, {
        where: {
          id: req.body.id
        }
      }
    ).then(function (data) {
      res.json(data)
    })
  });
};