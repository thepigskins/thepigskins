const express = require('express');
const path = require('path');
const scraperController = require('./scraper'); 
const app = express();
const PORT = 8000;
const database = require('./server/models/postgresDB');


database.Userza.create({
  userName: 'User43',
  firstName: 'Bryan',
  lastName: 'Daniel',
  password: 'password'
}).catch((error) => {
  console.log(error);
})

// database.User.create({
//   _id: 00000002,
//   userName: 'User2',
//   firstName: 'firstname2',
//   lastName: 'lastname2',
//   password: 'password'
// }).catch((error) => {
//   console.log(error); 
// })

//console.log('database', database);
//
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

app.get('/test', scraperController.getMainData);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});