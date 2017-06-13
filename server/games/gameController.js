const Game = require('./gameModel');

module.exports = {
  loadGames: function(req, res) {
    Game.find({userId: req.params.id}, function(err, games) {
      if (err) {
        console.log(err);
      } else {
        console.log('Games Found.');
        res.end(JSON.stringify(games));
      }
    });
  },
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

    newGame.userId = req.body.userId;
    newGame.averageFrame = req.body.averageFrame;
    newGame.closePercent = req.body.closePercent;
    newGame.closedFrames = req.body.closedFrames;
    newGame.date = req.body.date;
    newGame.frames = req.body.frames;
    newGame.gutterballs = req.body.gutterballs;
    newGame.openFrames = req.body.openFrames;
    newGame.score = req.body.score;
    newGame.spares = req.body.spares;
    newGame.splits = req.body.splits;
    newGame.strikes = req.body.strikes;
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
