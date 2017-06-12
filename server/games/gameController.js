const Game = require('./gameModel');

module.exports = {
  getGame: function(req, res) {
    Game.find({_id: req.body.id}, function(err, game) {
      if (err) {
        console.log(err);
      } else {
        console.log('Game Found.');
        res.end(JSON.stringify(game));
      }
    });
  },
  addGame: function(req, res) {
    var newGame = new Game();
    newGame._userId = req.body.userId;
    newGame.date = req.body.date;
    newGame.frames = req.body.frames;
    newGame.score = req.body.score;
    newGame.spares = req.body.spares;
    newGame.splits = req.body.splits;
    newGame.strikes = req.body.strikes;
    newGame.gutterballs = req.body.gutterballs;
    newGame.averageFrame = req.body.averageFrame;
    newGame.openFrames = req.body.openFrames;
    newGame.closedFrames = req.body.closedFrames;
    newGame.totalPins = req.body.totalPins;

    newGame.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Game Created.');
        res.end(JSON.stringify(newGame));
      }
    });
  }
};
