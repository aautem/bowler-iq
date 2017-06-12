const User = require('./userModel');

module.exports = {
  getUser: function(req, res) {
    User.find({name: req.body.name}, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log('User Found.');
        res.end(user);
      }
    });
  },
  addUser: function(req, res) {
    // check if user already exists
    User.find({name: req.body.name}, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        if (!user) {
          console.log('Creating New User.');
          var newUser = new User();
          newUser.name = req.body.name;
          newUser.games = [];
          newUser.badges = {
            f01: false,
            f02: false,
            f03: false,
            f04: false,
            f05: false,
            f06: false,
            f07: false,
            f08: false,
            f09: false,
            f10: false,
            f11: false,
            f12: false
          };
          newUser.stats = {
            average: 0,
            averageFrame: 0,
            closePercent: 0,
            closedFrames: 0,
            gutterballs: 0,
            highScore: 0,
            openFrames: 0,
            totalFrames: 0,
            totalGames: 0,
            totalPins: 0,
            totalScore: 0,
            totalSpares: 0,
            totalSplits: 0,
            totalStrikes: 0
          };
          newUser.save(function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log('User Created.');
              res.end(newUser);
            }
          });
        } else {
          console.log('User Already Exists.');
          res.end('User Already Exists.');
        }
      }
    });
  }
};
