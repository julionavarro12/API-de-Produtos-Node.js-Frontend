const service = require('../service/produtoService');

exports.getProdutos = async (req, res) => {
  try {
    const produtos = await service.buscarTodos();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.getProdutoByCodigo = async (req, res) => {
  try {
    const produto = await service.buscarPorCodigo(req.params.codigo);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.getProdutosByCategoria = async (req, res) => {
  try {
    const produtos = await service.buscarPorCategoria(req.params.categoria);
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.createProduto = async (req, res) => {
  try {
    const produto = await service.criar(req.body);
    res.status(201).json({ message: 'Produto criado com sucesso!', produto });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.updateProduto = async (req, res) => {
  try {
    const atualizado = await service.atualizar(req.params.codigo, req.body);
    res.json(atualizado);
  } catch (err) {
    res.status(404).json({ erro: err.message });
  }
};

exports.deleteProduto = async (req, res) => {
  try {
    await service.deletar(req.params.codigo);
    res.json({ message: 'Produto deletado com sucesso!' });
  } catch (err) {
    res.status(404).json({ erro: err.message });
  }
};
