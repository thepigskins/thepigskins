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
        let statObj = {}; 
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
          
        $(element).children('.playertableStat').each((index2, element2) => {
          if (count === 0) {
            statObj['C/A'] = $(element2).text();
          } else if (count === 1) {
            statObj['Pass YDS'] = $(element2).text();
          } else if (count === 2) {
            statObj['Pass TD'] = $(element2).text();
          } else if (count === 3) {
            statObj['INT'] = $(element2).text(); 
          } else if (count === 4) {
            statObj['RUSH ATT'] = $(element2).text();          
          } else if (count === 5) {
            statObj['RUSH YDS'] = $(element2).text();
          } else if (count === 6) {
            statObj['RUSH TD'] === $(element2).text();
          } else if (count === 7) {
            statObj['REC'] = $(element2).text();
          } else if (count === 8) {
            statObj['REC YDS'] = $(element2).text();
          } else if (count === 9) {
            statObj['REC TD'] = $(element2).text();
          } else if (count === 10) {
            statObj['REC TARGET'] = $(element2).text();
          } else if (count === 11) {
            statObj['2PC'] = $(element2).text();
          } else if (count === 12) {
            statObj['FUML'] = $(element2).text();
          } else if (count === 13) {
            statObj['DEFENSE TD'] = $(element2).text();
          } else if (count === 14) {
            count = 0; 
            statObj['TOTAL'] = $(element2).text();
            playerObj['STATS'] = statObj;
            statObj = {};
          }
          count +=1;

        });

      //grabbing player Id        
      let id = $(element).attr('id').slice(4);     
      playersObj[id] = playerObj;


      });
        
      console.log(playersObj);
      res.end("HELLO");
    })
  },

  populateJson: (req, res, next) => {
  
  }
};


module.exports = scraperController;