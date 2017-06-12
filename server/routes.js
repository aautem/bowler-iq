const userController = require('./users/userController');
const gameController = require('./games/gameController');

module.exports = function(app, express) {
  app.get('/api/users/:name', userController.getUser);
  app.post('/api/users', userController.addUser)

  app.get('/api/games/:id', gameController.getGame);
  app.post('/api/games', gameController.addGame);
};
