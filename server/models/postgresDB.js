'use strict'; 

const Sequelize = require('sequelize');

//CONNECTION INSTANCE  
// const sequelize = new Sequelize('ptcmvsaa', 'ptcmvsaa', 'GS9lS67Kyint8bSW6kX0bM2D9-lvIRFZ', {
//   host: 'elmer-02.db.elephantsql.com',
//   dialect: 'postgres',
// });

//CONNECTION INSTANCE THROUGH URL 
const sequelize = new Sequelize('postgres://ptcmvsaa:GS9lS67Kyint8bSW6kX0bM2D9-lvIRFZ@elmer.db.elephantsql.com:5432/ptcmvsaa');

//User Schema 
const Userza = sequelize.define('userz', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  userName: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING 
});

const Team = sequelize.define('teams', {
  _id: { type: Sequelize.INTEGER(8), primaryKey: true },
  teamName: Sequelize.STRING,
  city: Sequelize.STRING
});

const Position = sequelize.define('positions', {
  position: Sequelize.STRING
});

const Player = sequelize.define('players', {
  _id: { type: Sequelize.INTEGER(8), primaryKey: true },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  completeAttempts: Sequelize.INTEGER,
  ydsThrow: Sequelize.INTEGER,
  tdThrow: Sequelize.INTEGER,
  intThrow: Sequelize.INTEGER,
  rushAtt: Sequelize.INTEGER,
  ydsRush: Sequelize.INTEGER,
  tdRush: Sequelize.INTEGER,
  reception: Sequelize.INTEGER,
  ydsReception: Sequelize.INTEGER,
  tdReception: Sequelize.INTEGER,
  targetReception: Sequelize.INTEGER,
  twoPt: Sequelize.INTEGER,
  fuml: Sequelize.INTEGER,
  tdDefense: Sequelize.INTEGER
});


Team.hasMany(Player);
Position.hasMany(Player);
Userza.belongsToMany(Player, {through: 'UserPlayer'} );
Player.belongsToMany(Userza, {through: 'UserPlayer'} );



sequelize.sync()
.catch((error) => {
  console.log(error);
})

module.exports = { sequelize, Userza, Team, Position, Player }
