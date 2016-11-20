'use strict'; 
const cheerio = require('cheerio');
const request = require('request');

// const allPlayersUrl = 'http://games.espn.com/ffl/leaders?startIndex=0';
const allPlayerSeason = 'http://games.espn.com/ffl/leaders?startIndex=0&seasonTotals=true&seasonId=2016';
const playersObj = {}; 


const scraperController = {
  getMainData: (req, res, next) => {
    request(allPlayerSeason, (error, response, html) => {
      const $ = cheerio.load(html); 

      $('.pncPlayerRow').each((rowIndex, rowElement) => {

        //Creating player Object 
        const playerObj = {}; 
        const rowString = $(rowElement).children('.playertablePlayerName').text();
        const playerAttributes = $(rowElement).children('.playertableStat');
        const commaIndex = rowString.indexOf(',');

        if (commaIndex !== -1) {
          playerObj.name = rowString.slice(0, commaIndex);
          //const info = rowString.slice(commaIndex + 2).split(' ').join('');
          const info = rowString.slice(commaIndex + 2).match(/[a-zA-Z]+/g);
          playerObj.team = info[0];
          playerObj.position = info[1];
          playerObj.status = info[2] || 'OK';
        } else {
          const info = rowString.split(' ');
          playerObj.name = info[0];
          playerObj.team = info[0];
          playerObj.position = info[1].slice(0, 4);
        }
        
        playerObj['C/A'] = $(playerAttributes[0]).text();
        playerObj['Pass YDS'] = $(playerAttributes[1]).text();
        playerObj['Pass TD'] = $(playerAttributes[2]).text();
        playerObj['INT'] = $(playerAttributes[3]).text();
        playerObj['RUSH ATT'] = $(playerAttributes[4]).text();
        playerObj['RUSH YDS'] = $(playerAttributes[5]).text();
        playerObj['RUSH TD'] = $(playerAttributes[6]).text();
        playerObj['REC'] = $(playerAttributes[7]).text();
        playerObj['REC YDS'] = $(playerAttributes[8]).text();
        playerObj['REC TD'] = $(playerAttributes[9]).text();
        playerObj['REC TARGET'] = $(playerAttributes[10]).text();
        playerObj['2PC'] = $(playerAttributes[11]).text();
        playerObj['FUML'] = $(playerAttributes[12]).text();
        playerObj['DEFENSE TD'] = $(playerAttributes[13]).text();
        playerObj['TOTAL'] = $(playerAttributes[14]).text();

      //grabbing player Id        
      const id = $(rowElement).attr('id').slice(4);     
      playersObj[id] = playerObj;
      });
        
      return res.json(playersObj);
    })
  },

  // populateJson: (req, res, next) => {
  
  // }
};


module.exports = scraperController;