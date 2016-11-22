const database = require('../models/postgresDB');
const positions = require('../initialize/positions')

const dbController = {
  createUser(user) {
    database.User.create({
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password
    }).catch((error) => {
      console.log(error);
    });
  },

  createPlayer(player) {
    database.Player.create({
      id: player.id,
      firstName: player.firstName,
      lastName: player.lastName,
      completedPasses: player.completedPasses,
      attemptedPasses: player.attemptedPasses,
      ydsThrown: player.ydsThrown,
      tdThrows: player.tdThrows,
      intThrows: player.intThrows,
      rushAtt: player.rushAtt,
      ydsRush: player.ydsRush,
      tdRush: player.tdRush,
      receptions: player.receptions,
      ydsReception: player.ydsReception,
      tdReceptions: player.tdReceptions,
      targetReception: player.targetReception,
      twoPt: player.twoPt,
      fumble: player.fumble,
      tdDefense: player.tdDefense,
      totalPoints: player.totalPoints,
      positionId: positions[player.position].positionId
    }).catch((error) => {
      console.log(error);
    });
  },

  updatePlayer(playerData) {
    const firstName = playerData.firstName;
    const lastName = playerData.lastName;

    database.Player.findOne({ where: { firstName, lastName } }).then((player) => {
      if (!player) {
        this.createPlayer(playerData);
      } else {
        player.update({
          id: playerData.id,
          firstName: playerData.firstName,
          lastName: playerData.lastName,
          completedPasses: playerData.completedPasses,
          attemptedPasses: playerData.attemptedPasses,
          ydsThrown: playerData.ydsThrown,
          tdThrows: playerData.tdThrows,
          intThrows: playerData.intThrows,
          rushAtt: playerData.rushAtt,
          ydsRush: playerData.ydsRush,
          tdRush: playerData.tdRush,
          receptions: playerData.receptions,
          ydsReception: playerData.ydsReception,
          tdReceptions: playerData.tdReceptions,
          targetReception: playerData.targetReception,
          twoPt: playerData.twoPt,
          fumble: playerData.fumble,
          tdDefense: playerData.tdDefense,
          totalPoints: playerData.totalPoints
        });
      } // End of else
    }); // End of findOne
  }, // End of updatePlayer

   findPlayer(req, res, next) {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

//include: [{model: database.Position, required: true}] 
    database.Player.findOne({ where: { firstName, lastName }, include: [database.Position] }).then((player) => {
      if (!player) res.send(null);
      req.player = player;
      next();
    }).catch((error) => {
      console.log(error);
      res.send(error);
    });
  },

  joinUserPlayer(userName, firstName) {
    database.User.find({ where: { userName } }).then((user) => {
      database.Player.find({ where: { firstName } }).then((player) => {
        user.setPlayers(player);
      });
    });
  },

  getAllPlayers(req, res, next) {
    database.Player.findAll().then((players) => {
      if (!players) res.send(null);
      req.allPlayers = players.map(player => player.dataValues);
      next();
    }).catch((error) => {
      console.log(error);
      res.send(error);
    });
  }

};

module.exports = dbController;
