'use strict'; 
const REMOTE_URL = require('../database.js');
const LOCAL_URL = 'postgres://localhost:5432/pigskins';
const Sequelize = require('sequelize');

//CONNECTION INSTANCE  
// const sequelize = new Sequelize('ptcmvsaa', 'ptcmvsaa', 'GS9lS67Kyint8bSW6kX0bM2D9-lvIRFZ', {
//   host: 'elmer-02.db.elephantsql.com',
//   dialect: 'postgres',
// });

//CONNECTION INSTANCE THROUGH URL 
//const sequelize = new Sequelize('postgres://ptcmvsaa:GS9lS67Kyint8bSW6kX0bM2D9-lvIRFZ@elmer.db.elephantsql.com:5432/ptcmvsaa');


const sequelize = new Sequelize(REMOTE_URL);

const User = sequelize.define('users', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  userName: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING 
});

const Team = sequelize.define('teams', {
  id: { type: Sequelize.INTEGER(8), primaryKey: true },
  teamName: Sequelize.STRING,
  city: Sequelize.STRING
});

const Position = sequelize.define('positions', {
  position: Sequelize.STRING
});

const Player = sequelize.define('players', {
  id: { type: Sequelize.INTEGER(8), primaryKey: true },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  completedPasses: Sequelize.INTEGER,
  attemptedPasses: Sequelize.INTEGER,
  ydsThrown: Sequelize.INTEGER,
  tdThrows: Sequelize.INTEGER,
  intThrows: Sequelize.INTEGER,
  rushAtt: Sequelize.INTEGER,
  ydsRush: Sequelize.INTEGER,
  tdRush: Sequelize.INTEGER,
  receptions: Sequelize.INTEGER,
  ydsReception: Sequelize.INTEGER,
  tdReceptions: Sequelize.INTEGER,
  targetReception: Sequelize.INTEGER,
  twoPt: Sequelize.INTEGER,
  fumble: Sequelize.INTEGER,
  tdDefense: Sequelize.INTEGER,
  totalPoints: Sequelize.INTEGER
});

//Creates columns but needs to add fake data first to create the 

//in callback set the 
const UserPlayer = sequelize.define('usersplayers', {});

Team.hasMany(Player);
Position.hasMany(Player);
User.belongsToMany(Player, {through: 'usersplayers'} );
Player.belongsToMany(User, {through: 'usersplayers'} );


sequelize.sync()
.catch((error) => {
  console.log(error);
})

module.exports = { sequelize, User, Team, Position, Player, UserPlayer }
