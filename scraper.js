'use strict'; 

const cheerio = require('cheerio');
const request = require('request');

const allPlayersUrl = 'http://games.espn.com/ffl/leaders?startIndex=0';
const allPlayerSeason = 'http://games.espn.com/ffl/leaders?startIndex=0&seasonTotals=true&seasonId=2016';
const playerObj = {}; 
const attributes = [];

const scraperController = {
  getMainData: (req, res, next) => {
    request(allPlayerSeason, (error, response, html) => {
      let $ = cheerio.load(html); 


      // $('.pncPlayerRow').each((index, element) => {
        
      //   console.log($(element).children('.playertablePlayerName').text());
      // });
        
      // $('.pncPlayerRow').children('.playertableStat').each((index, element) => {
      //   attributes.push($(element).text()); 
      // });

      res.end("HELLO");
    })
  },

  populateJson: (req, res, next) => {
  
  }
};


module.exports = scraperController;