const User = require('./userModel');

module.exports = {
  addUser: async (req, res) => {
    const [user, created] = await User.findOrCreate({
      where: { name: req.body.name },
      defaults: { name: req.body.name },
    });

    if (created) {
      console.log('User created.');
      res.end(JSON.stringify(user));
    } else {
      const error = 'User already exists.';
      console.error(error);
      res.end(error);
    }
  },
  getUser: async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id }});

    if (user) {
      console.log('User found.');
      res.end(JSON.stringify(user));
    } else {
      const error = 'User does not exist.';
      console.error(error);
      res.end(error);
    }
  },
  updateUser: async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id }});

    if (!user) {
      const error = 'User does not exist.';
      console.error(error);
      res.end(error);
    } else {
      const updatedUser = await User.update(req.body.user, {
        where: {
          id: user.id,
        },
      });

      if (updatedUser) {
        console.log('User updated.');
        res.end(JSON.stringify(updatedUser));
      } else {
        const error = 'Something went wrong.';
        console.error(error);
        res.end(error);
      }
    }
  }
};
