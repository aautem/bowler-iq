const gameController = require('./games/gameController');
const userController = require('./users/userController');

module.exports = function(app, express) {
  app.post('/api/users', userController.addUser)
  app.get('/api/users/:id', userController.getUser);
  app.put('/api/users/:id', userController.updateUser);

  app.get('/api/users/:id/games', gameController.loadGames);

  app.get('/api/games/:id', gameController.getGame);
  app.post('/api/games', gameController.addGame);
};
