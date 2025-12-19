const Produto = require('../models/Produtos');

exports.buscarTodos = () => Produto.findAll({ order: [['createdAt', 'DESC']], limit: 12 });

exports.buscarPorCodigo = (codigo) => Produto.findOne({ where: { codigo } });

exports.buscarPorCategoria = (categoria) => Produto.findAll({ where: { categoria } });

exports.criar = async (dados) => {
  const existe = await Produto.findOne({ where: { codigo: dados.codigo } });
  if (existe) throw new Error('Código do produto já existe.');
  return Produto.create(dados);
};

exports.atualizar = async (codigo, dados) => {
  const [linhasAfetadas] = await Produto.update(dados, { where: { codigo } });
  if (linhasAfetadas === 0) throw new Error('Produto não encontrado para atualizar.');
  return Produto.findOne({ where: { codigo } });
};

exports.deletar = async (codigo) => {
  const deletados = await Produto.destroy({ where: { codigo } });
  if (deletados === 0) throw new Error('Produto não encontrado para deletar.');
};
