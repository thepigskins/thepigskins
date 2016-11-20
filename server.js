const express = require('express');
const path = require('path');
const scraperController = require('./scraper'); 
const app = express();
const PORT = 8000;
const database = require('./server/models/postgresDB');

database.User.create({
  userName: 'User43',
  firstName: 'Bryan',
  lastName: 'Daniel',
  password: 'password'
}).catch((error) => {
  console.log(error);
}).then(() => {
  database.Player.create({
    id: 01234567,
    firstName: 'Philip',
    lastName: 'Rivers',
    completeAttempts: 100,
    ydsThrow: 100,
    tdThrow: 100,
    intThrow: 100,
    rushAtt: 100,
    ydsRush: 100,
    tdRush: 100,
    reception: 100,
    ydsReception: 100,
    tdReception: 100,
    targetReception: 100,
    twoPt: 100,
    fuml: 100,
    tdDefense: 100
  }).catch((error) => {
    console.log(error);
  }).then(() => {
    // find player 
    database.User.find({where: {userName: 'User43'}}).then((user) => {
      database.Player.find({where: {firstName: 'Philip'}}).then((player) => {
        user.setPlayers(player); 
      })
    })  
  })
})


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


