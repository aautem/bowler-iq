const { Sequelize } = require('sequelize');

const connectionUri = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionUri, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('BowlerIQ database connected.')
  } catch (error) {
    console.error('Unable to connect to database:', error);
  }
}

connectToDb();

module.exports = sequelize;
