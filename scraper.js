'use strict'; 

const cheerio = require('cheerio');
const request = require('request');

const allPlayersUrl = 'http://games.espn.com/ffl/leaders?startIndex=0';
const allPlayerSeason = 'http://games.espn.com/ffl/leaders?startIndex=0&seasonTotals=true&seasonId=2016';
const playersObj = {}; 


const scraperController = {
  getMainData: (req, res, next) => {
    request(allPlayerSeason, (error, response, html) => {
      let $ = cheerio.load(html); 


      $('.pncPlayerRow').each((index, element) => {

        //Creating player Object 
        let playerObj = {}; 
        let rowString = $(element).children('.playertablePlayerName').text();
        let count = 0; 
    
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
          

        //grabbing player Id        
        let id = $(element).attr('id').slice(4);     

        playersObj[id] = playerObj;

        $(element).children('.playertableStat').each((index2, element2) => {
          let statObj = {}; 
          if(count % 15 === 0) {
          } else {
            statObj['C/A'] = element2;
            statObj['Pass YDS'] = element2;
            statObj['Pass TD'] = element2;
            statObj['INT'] = element2; 
            statObj['RUSH ATT'] = element2;
            statObj['RUSH YDS'] = element2;
            statObj['REC'] = element2;
            statObj['REC YDS'] = element2;
            statObj['REC TD'] = element2;
            statObj['REC TARGET'] = element2;
            statObj['2PC'] = element2;
            statObj['FUML'] = element2;
            statObj['DEFENSE TD']; 

          }
        });

      });
        
      //console.log(playersObj);
      res.end("HELLO");
    })
  },

  populateJson: (req, res, next) => {
  
  }
};


module.exports = scraperController;