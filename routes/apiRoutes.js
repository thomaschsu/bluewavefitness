// example

var db = require("../models");

module.exports = function(app) {
  
  app.post("/", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });




  // Create a new example
  app.post("/profile", function(req, res) {
    console.log(req.body);
    console.log("TEST");
    db.Exercise.create
    ({name: req.body
    
    
    
    }).then(function(Exercise) {
      res.json(Exercise);
    });
  });

  // fetch all exercise data
  app.get("/api/portal", function(req, res) {
    db.Exercise.findAll({}).then(function(Exercise) {
      res.json(Exercise);
    });
  });

  // app.get("/api/portal", function(req, res) {
  //   db.Exercise.findAll({}).then(function(Exercise) {
  //     res.json(Exercise);
  //   });
  // });
};
