const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
const path = require('path');
const sequelize = require('./config/database');
const produtoRoutes = require('./routes/produtoRoutes');
const produtoService = require ('../server/service/produtoService')
const app = express();
const PORT = 3000;


app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/produtos', produtoRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => console.error(err));
