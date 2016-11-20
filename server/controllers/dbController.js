const database = require('../models/postgresDB');

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
      completeAttempts: player.completeAttempts,
      ydsThrow: player.ydsThros,
      tdThrow: player.tdThrow,
      intThrow: player.intThrow,
      rushAtt: player.rushAtt,
      ydsRush: player.ydsRush,
      tdRush: player.tdRush,
      reception: player.reception,
      ydsReception: player.ydsReception,
      tdReception: player.tdReception,
      targetReception: player.targetReception,
      twoPt: player.twoPt,
      fuml: player.fuml,
      tdDefense: player.tdDefense
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
          completeAttempts: playerData.completeAttempts,
          ydsThrow: playerData.ydsThros,
          tdThrow: playerData.tdThrow,
          intThrow: playerData.intThrow,
          rushAtt: playerData.rushAtt,
          ydsRush: playerData.ydsRush,
          tdRush: playerData.tdRush,
          reception: playerData.reception,
          ydsReception: playerData.ydsReception,
          tdReception: playerData.tdReception,
          targetReception: playerData.targetReception,
          twoPt: playerData.twoPt,
          fuml: playerData.fuml,
          tdDefense: playerData.tdDefense
        });
      } // End of else
    }); // End of findOne
  }, // End of updatePlayer

  findPlayer(req, res, next) {
    const firstName = req.q.firstName;
    const lastName = req.q.lastName;

    database.Player.findOne({ where: { firstName, lastName } }).then((player) => {
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
  }

};

module.exports = dbController;


// {
//   userName: 'User43',
//   firstName: 'Bryan',
//   lastName: 'Daniel',
//   password: 'password'
// }

// {
//     id: 01234567,
//     firstName: 'Philip',
//     lastName: 'Rivers',
//     completeAttempts: 100,
//     ydsThrow: 100,
//     tdThrow: 100,
//     intThrow: 100,
//     rushAtt: 100,
//     ydsRush: 100,
//     tdRush: 100,
//     reception: 100,
//     ydsReception: 100,
//     tdReception: 100,
//     targetReception: 100,
//     twoPt: 100,
//     fuml: 100,
//     tdDefense: 100
//   }
