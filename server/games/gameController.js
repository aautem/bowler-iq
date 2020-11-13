const Frame = require('../frames/frameModel');
const Game = require('./gameModel');

module.exports = {
  loadGames: async (req, res) => {
    const games = await Game.findAll({
      where: { userId: req.params.id },
    });

    if (games) {
      console.log('Games found.');
      res.end(JSON.stringify(games));
    } else {
      console.error('No games found.');
    }
  },
  getGame: async (req, res) => {
    const game = await Game.findOne({ where: { id: req.params.id }});
    const frames = await Frame.findAll({
      where: { gameId: req.params.id },
    });

    if (game) {
      console.log('Game found.');

      res.end(JSON.stringify({
        ...game.dataValues,

        // Add frames to response
        frames: frames.map((frame, index) => ({
          frame: frame.frame,
          ball1: {
            disabled: frame.ball1Disabled,
            score: frame.ball1Score,
          },
          ball2: {
            disabled: frame.ball2Disabled,
            score: frame.ball2Score,
          },
          frameScore: frame.frameScore,
          totalScore: frame.totalScore,
        })).sort((a, b) => a.frame - b.frame),
      }));
    } else {
      console.error('Game not found.');
    }
  },
  addGame: async (req, res) => {
    const game = req.body;
    const frameIds = [];
    const frames = game.frames.slice();

    const newGame = await Game.create({
      userId: game.userId,
      date: game.date,
      score: game.score,
      spares: game.spares,
      splits: game.splits,
      strikes: game.strikes,
      gutterballs: game.gutterballs,
      averageFrame: game.averageFrame,
      openFrames: game.openFrames,
      closedFrames: game.closedFrames,
      closePercent: game.closePercent,
      totalPins: game.totalPins,
    });

    if (newGame) {
      console.log('Game created.');

      const insertFrame = async (frame, index) => {
        const newFrame = await Frame.create({
          gameId: newGame.id,
          ball1Disabled: frame.ball1.disabled,
          ball1Score: frame.ball1.score,
          ball2Disabled: frame.ball2.disabled,
          ball2Score: frame.ball2.score,
          frame: frame.frame,
          frameScore: frame.frameScore,
          totalScore: frame.totalScore,
        });
  
        frameIds[index] = newFrame.id;
      };
  
      frames.forEach(insertFrame);

      res.end(JSON.stringify(newGame));
    } else {
      console.error('Something went wrong.');
    }
  }
};
