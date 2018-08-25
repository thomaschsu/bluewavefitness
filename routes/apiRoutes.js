// example

var db = require("../models");

module.exports = function(app) {
  
  app.post("/", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });


  app.get("/api/portal", function(req,res) {
    db.Exercise.findAll({}).then(function(Exercise) {
      res.json(Exercise)
    })
  })

  app.get("/api/profile", function(req,res) {
    db.User.findAll({}).then(function(Exercise) {
      res.json(Exercise)
    })
  })
  



  // Create a new example
  app.post("/profile", function(req, res) {
    console.log(req.body);
    console.log("TEST");
    //var workoutString = JSON.stringify(req.body)
    db.Exercise.create(req.body).then(function(Exercise) {
      res.json(Exercise);
    });
  });



  // app.get("/api/portal", function(req, res) {
  //   db.Exercise.findAll({}).then(function(Exercise) {
  //     res.json(Exercise);
  //   });
  // });
};
