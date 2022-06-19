const http = require('http');

const express = require('express');

const app = express();

const path     = require('path');
const basename = path.basename(__dirname+'/index.html');

app.use(express.static(__dirname +'/assets'));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port=3000, hostname='127.0.0.1', () => {
  console.log(`Servidor corriendo en..: http://${hostname}:${port}/`);
});