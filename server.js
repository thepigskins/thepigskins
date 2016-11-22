const express = require('express');
const path = require('path');
const dbController = require('./server/controllers/dbController');
const app = express();
const PORT = 8000;


app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  console.log("STATUS CODE", response.statusCode);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'));
});

app.get('/findPlayer', dbController.findPlayer, (req, res) => {
  res.send(req.player);
});

app.get('/getAllPlayers', dbController.getAllPlayers, (req, res) => {
  res.send(req.allPlayers);
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
