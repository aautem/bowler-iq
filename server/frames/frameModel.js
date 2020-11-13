const { DataTypes } = require('sequelize');
const Game = require('../games/gameModel');
const sequelize = require('../db');

const Frame = sequelize.define('Frame', {
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Game,
      key: 'id',
    },
  },
  ball1Disabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  ball1Score: DataTypes.INTEGER,
  ball2Disabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  ball2Score: DataTypes.INTEGER,
  frame: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  frameScore: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalScore: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Frame.sync({ alter: true });

module.exports = Frame;
