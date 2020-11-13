const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('../users/userModel');

const Game = sequelize.define('Game', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  spares: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  splits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  strikes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gutterballs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  averageFrame: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  openFrames: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  closedFrames: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  closePercent: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalPins: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Game.sync({ alter: true });

module.exports = Game;
