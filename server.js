const express = require('express');
const path = require('path');
const app = express();

// Serve arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '')));

// Defina a porta onde o servidor vai rodar
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
