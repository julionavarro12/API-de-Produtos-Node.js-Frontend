const baseUrl = 'http://localhost:3000/produtos';

async function carregarProdutos() {
  try {
    const resposta = await fetch(baseUrl);
    const produtos = await resposta.json();

    const grid = document.querySelector('.products-grid');
    grid.innerHTML = ''; 

    produtos.slice(0, 9).forEach(produto => {
      const imagem = produto.imagem && produto.imagem.trim() !== '' ? produto.imagem : 'images/placeholder.png';
      const nome = produto.nome && produto.nome.trim() !== '' ? produto.nome : 'Produto sem nome';
      const codigo = produto.codigo && produto.codigo.toString().trim() !== '' ? produto.codigo : 'Sem código';
      const preco = typeof produto.preco === 'number' ? produto.preco.toFixed(2) : '0,00';
      const categoria = produto.categoria && produto.categoria.trim() !== '' ? produto.categoria : 'Não informada';

      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${imagem}" alt="${nome}" class="product-image" />
        <h3>${nome}</h3>
        <p><strong>Código:</strong> ${codigo}</p>
        <p><strong>Preço:</strong> R$ ${preco}</p>
        <p><strong>Categoria:</strong> ${categoria}</p>
      `;

      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.location.href = `detalhes.html?codigo=${encodeURIComponent(codigo)}`;
      });

      grid.appendChild(card);
    });

  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
  }
}

carregarProdutos();
