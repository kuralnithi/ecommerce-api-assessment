const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres','postgres','password', {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    logging: false,
    pool: { max: 5 },
});

sequelize.authenticate()
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log("error:"));

module.exports = sequelize;
