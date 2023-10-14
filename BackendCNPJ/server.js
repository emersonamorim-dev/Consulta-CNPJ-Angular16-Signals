const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

// Middleware para definir o Content-Type como JSON
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Rota padrão
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo ao Backend Consulta de CNPJ!.' });
});

// Configuração do proxy
app.use('/v1/cnpj/:cnpj', createProxyMiddleware({ 
    target: 'https://www.receitaws.com.br/v1/cnpj', 
    changeOrigin: true,
    pathRewrite: {
        '^/v1/cnpj': '', 
    },
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['content-type'] = 'application/json;charset=utf-8';
    }
}));

module.exports = app;