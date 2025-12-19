const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
  nome: DataTypes.STRING,
  codigo: {
    type: DataTypes.STRING,
    unique: true
  },
  preco: DataTypes.FLOAT,
  descricao: DataTypes.STRING,
  quantidade: DataTypes.INTEGER,
  avaliacao: DataTypes.FLOAT,
  categoria: DataTypes.STRING,
  imagem: DataTypes.STRING 
});

module.exports = Produto;
