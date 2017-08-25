let Robot = require('../models/robots');

let HomeController = {
  index: function(req, res){
    //when pulling from database, need .find
    Robot.find().then(function(robot){
      res.render('index', {robot: robot});
    });
  },
  profile: function(req, res){
    let robotName = req.params.name;
    Robot.findOne({name: robotName}).then(function(robot){
      res.render('profile', {robot: robot});
    });
  },
  jobseekers: function(req, res){
    Robot.find().then(function(robot){
      res.render('jobseekers', {robot: robot});
    });
  },
  employed: function(req, res){
    Robot.find().then(function(robot){
      res.render('employed', {robot: robot});
    });
  }
};

//exporting so we can use this variable in other files we have required this one into
module.exports = HomeController;
