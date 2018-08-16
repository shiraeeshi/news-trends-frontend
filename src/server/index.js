const express = require('express');
const os = require('os');
const fetch = require('node-fetch');

const app = express();

app.use(express.static('dist'));

app.get('/api/news', (request, response) =>
  fetch('http://rest-api:9090/news')
    .then(res => res.json())
    .then(news => response.send(news))
);

app.listen(8080, () => console.log('Listening on port 8080!'));
