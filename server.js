const express = require('express');
const path = require('path');
const scraperController = require('./scraper'); 
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'client')));

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  console.log("STATUS CODE", response.statusCode);
  next();
});

app.get('/test', scraperController.getMainData);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});