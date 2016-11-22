const database = require('../models/postgresDB');
const teams = require('./teams');

//'Ari': { teamId: 2,city: 'Arizona', teamName: 'Cardinals' },
Object.keys(teams).forEach((abbreviation) => {
  database.Team.create({
    id: teams[abbreviation].teamId,
    abbreviation: abbreviation,
    teamName: teams[abbreviation].teamName, 
    city: teams[abbreviation].city
  }).catch((error) => {
    console.log(error);
  });
});
