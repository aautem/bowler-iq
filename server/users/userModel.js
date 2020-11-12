const { DataTypes } = require('sequelize');

const sequelize = require('../db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // Badges
  f01Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f02Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f03Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f04Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f05Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f06Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f07Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f08Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f09Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f10Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f11Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  f12Badge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  // Stats
  average: {
    type: DataTypes.FLOAT,
  },
  averageFrame: {
    type: DataTypes.FLOAT,
  },
  closePercent: {
    type: DataTypes.FLOAT,
  },
  closedFrames: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  gutterballs: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  highScore: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  openFrames: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalFrames: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalGames: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalPins: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalScore: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalSpares: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalSplits: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalStrikes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

User.sync({ alter: true });

module.exports = User;
