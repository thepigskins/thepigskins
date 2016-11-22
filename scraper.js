'use strict';
const cheerio = require('cheerio');
const request = require('request');
const dbController = require('./server/controllers/dbController');
var count = 0;
// const allPlayersUrl = 'http://games.espn.com/ffl/leaders?startIndex=0';
const allPlayerSeason = 'http://games.espn.com/ffl/leaders?startIndex=0&seasonTotals=true&seasonId=2016';

const scraperController = {

  // req, res and next are optional parameters
  // the parameters are used when getPlayerData is called a middleware when handling requests
  // the parameters are not used when initializing the database
  getPlayerData(req, res, next) {
    const players = {};

    request(allPlayerSeason, (error, response, html) => {
      const $ = cheerio.load(html);

      $('.pncPlayerRow').each((rowIndex, rowElement) => {

        //Creating player Object 
        const playerObj = {};
        const rowString = $(rowElement).children('.playertablePlayerName').text();
        const playerAttributes = $(rowElement).children('.playertableStat');
        const commaIndex = rowString.indexOf(',');

        if (commaIndex !== -1) {
          const playerInfo = rowString.split(' ');
          playerObj.firstName = playerInfo[0];
          playerObj.lastName = playerInfo[1].slice(0, playerInfo[1].length - 1);
          //const info = rowString.slice(commaIndex + 2).split(' ').join('');
          const info = rowString.slice(commaIndex + 2).match(/[a-zA-Z]+/g);
          playerObj.team = info[0];
          playerObj.position = info[1];
          playerObj.status = info[2] || 'OK';
        } else {
          const info = rowString.split(' ');
          playerObj.firstName = info[0];
          playerObj.lastName = info[0];
          playerObj.position = info[1].slice(0, 4);
        }

        const completedAttempts = $(playerAttributes[0]).text().split('/');
        playerObj.completedPasses = completedAttempts[0];
        playerObj.attemptedPasses = completedAttempts[1];
        playerObj.ydsThrown = $(playerAttributes[1]).text();
        playerObj.tdThrows = $(playerAttributes[2]).text();
        playerObj.intThrows = $(playerAttributes[3]).text();
        playerObj.rushAtt = $(playerAttributes[4]).text();
        playerObj.ydsRush = $(playerAttributes[5]).text();
        playerObj.tdRush = $(playerAttributes[6]).text();
        playerObj.receptions = $(playerAttributes[7]).text();
        playerObj.ydsReception = $(playerAttributes[8]).text();
        playerObj.tdReceptions = $(playerAttributes[9]).text();
        playerObj.targetReception = $(playerAttributes[10]).text();
        playerObj.twoPt = $(playerAttributes[11]).text();
        playerObj.fumble = $(playerAttributes[12]).text();
        playerObj.tdDefense = $(playerAttributes[13]).text();
        playerObj.totalPoints = $(playerAttributes[14]).text();
   
        const id = $(rowElement).attr('id').slice(4);
        playerObj.id = id;
        players[id] = playerObj;

        dbController.updatePlayer(playerObj);
      }); // End of $('.pncPlayerRow').each()

      if (res) return res.json(players);
    }); // End of request
  } // End of getMainData
};

module.exports = scraperController;
