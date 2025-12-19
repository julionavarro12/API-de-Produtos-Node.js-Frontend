const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('TesteAPI', 'sa', 'MinhaSenha123!', {
  host: 'localhost',
  port: 49970,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  }
});

module.exports = sequelize;
