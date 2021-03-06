const express = require('express');
const app = express();
const path = require('path');

app.use(require('./usuario'));
app.use(require('./login'));
//Habilita carpeta publica
app.use(express.static(path.resolve(__dirname, '../public')));


module.exports = app;