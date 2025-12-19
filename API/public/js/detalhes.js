const baseUrl = 'http://localhost:3000/produtos';

function getCodigoFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('codigo');
}

async function carregarDetalhes() {
  const codigo = getCodigoFromURL();
  if (!codigo) {
    console.error('Código do produto não fornecido na URL');
    return;
  }

  try {
    const resposta = await fetch(`${baseUrl}/${codigo}`);
    if (!resposta.ok) {
      throw new Error('Produto não encontrado');
    }

    const produto = await resposta.json();

    document.querySelector('.imagem-produto').innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" />
    `;

    document.querySelector('.descricao').innerHTML = `
      <h3>${produto.nome}</h3>
      <p><strong>Descrição:</strong> ${produto.descricao}</p>
      <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
      <p><strong>Categoria:</strong> ${produto.categoria}</p>
      <p><strong>Estoque:</strong> ${produto.estoque}</p>
    `;
  } catch (error) {
    console.error('Erro ao carregar detalhes do produto:', error);
  }
}

carregarDetalhes(); 
