const database = require('../models/postgresDB');
const positions = require('./positions');

Object.keys(positions).forEach((abbreviation) => {
  database.Position.create({
    id: positions[abbreviation].positionId,
    abbreviation: abbreviation,
    positionName: positions[abbreviation].positionName 
  }).catch((error) => {
    console.log(error);
  });
});

