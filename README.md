# 📦 Projeto API de Produtos – Node.js + Frontend

Projeto desenvolvido como atividade acadêmica com o objetivo de demonstrar a **integração entre Backend e Frontend**, utilizando uma **API REST** para gerenciamento de produtos.

---

## 🎯 Objetivo do Projeto

Criar uma aplicação completa contendo:
- Backend em **Node.js** com **Express** e **Sequelize**
- Banco de dados **SQL Server**
- Frontend em **HTML, CSS e JavaScript**
- Comunicação entre frontend e backend via **API REST**

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js  
- Express  
- Sequelize (ORM)  
- SQL Server  
- CORS  
- Body-Parser  

### Frontend
- HTML5  
- CSS3  
- JavaScript (Fetch API)

---

## 📁 Estrutura do Projeto

server/
│
├── app.js
├── config/
│ └── database.js
├── controllers/
│ └── produtoController.js
├── models/
│ └── Produto.js
├── routes/
│ └── produtoRoutes.js
├── service/
│ └── produtoService.js
│
public/
│
├── css/
│ └── styles.css
├── js/
│ ├── home.js
│ └── detalhes.js
├── images/
│ └── placeholder.png
│
pages/
├── index.html
└── detalhes.html

## 🗄️ Configuração do Banco de Dados

O projeto utiliza **SQL Server**.

Arquivo: `config/database.js`

```js
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
⚠️ Importante:
Altere usuário, senha, porta e nome do banco conforme seu ambiente.

▶️ Como Executar o Projeto
1️⃣ Instalar dependências
npm install
2️⃣ Iniciar o servidor

node app.js
Servidor rodando em:


http://localhost:3000
🔌 Rotas da API
📄 Listar todos os produtos


GET /produtos
🔍 Buscar produto por código

GET /produtos/:codigo
🗂️ Buscar produtos por categoria


GET /produtos/categoria/:categoria
➕ Criar produto

POST /produtos
✏️ Atualizar produto

PUT /produtos/:codigo
❌ Deletar produto

DELETE /produtos/:codigo
🌐 Frontend
🏠 Página Inicial
Lista até 9 produtos

Consome a API /produtos

Ao clicar em um produto, redireciona para a página de detalhes

📄 Página de Detalhes
Exibe informações completas do produto

Consome a API /produtos/:codigo

🔐 CORS
O backend aceita requisições apenas das origens:

http://localhost:5500

http://127.0.0.1:5500

👨‍🎓 Autor
Aluno: Júlio Navarro
Curso: Análise e Desenvolvimento de Sistemas

📌 Observações
O Sequelize cria as tabelas automaticamente com sequelize.sync()

Projeto com fins educacionais

Ideal para aprendizado de API REST integrada ao Frontend
