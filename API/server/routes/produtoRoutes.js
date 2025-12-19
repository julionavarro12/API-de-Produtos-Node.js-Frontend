const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const produtoService = require ('../service/produtoService')

router.get('/', produtoController.getProdutos);
router.get('/categoria/:categoria', produtoController.getProdutosByCategoria);
router.get('/:codigo', produtoController.getProdutoByCodigo);
router.post('/', produtoController.createProduto);
router.put('/:codigo', produtoController.updateProduto);
router.delete('/:codigo', produtoController.deleteProduto);

module.exports = router;