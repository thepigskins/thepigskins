import axios from 'axios';
export const GET_PLAYER = 'GET_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const COMPARE_PLAYERS = 'COMPARE_PLAYERS';


//http://redux.js.org/docs/advanced/AsyncFlow.html

export function getPlayerActionCreator(playerName){
  //getPlayerActionCreator should query the DB and return a player object.
  //this will break because of async. --shawn

  let firstName, lastName;
  [firstName, lastName] = playerName.trim().split(' ').map( (name) => name[0].toUpperCase().concat(name.slice(1)));

// {
// "id": 11237,
// "firstName": "Matt",
// "lastName": "Ryan",
// "completedPasses": 236,
// "attemptedPasses": 346,
// "ydsThrown": 3247,
// "tdThrows": 24,
// "intThrows": 5,
// "rushAtt": 23,
// "ydsRush": 69,
// "tdRush": 0,
// "receptions": 0,
// "ydsReception": 0,
// "tdReceptions": 0,
// "targetReception": 0,
// "twoPt": 2,
// "fumble": 2,
// "tdDefense": 0,
// "totalPoints": 214,
// "createdAt": "2016-11-21T01:53:56.617Z",
// "updatedAt": "2016-11-21T01:53:56.617Z",
// "teamId": null,
// "positionId": null
// }

  //array destructioning to make 2 variables
  const playerData = {};

  axios.get(`http://localhost:8000/findPlayer?firstName=${firstName}&lastName=${lastName}`)
    .then(data => {
      const playerDataKeys = Object.keys(data.data);
      const position = data.data.position.abbreviation;
      const team = data.data.team.abbreviation;
      const necKeys = playerDataKeys.filter((attr)=>{
        if (attr !== 'createdAt' && attr !== 'position' && attr !== 'team' && attr !== 'updatedAt' && attr !== 'positionId' && attr !== 'teamId' && attr !== 'id' && attr !== 'firstName' && attr !== 'lastName'){
          return attr;
        }
      });
      necKeys.push('name')
      necKeys.forEach( (stat) => {
        if (stat === 'name') {
          playerData[stat] = firstName + ' ' + lastName;
        } else {
        playerData[stat] = data.data[stat]
      }
      });
    })
    return {
      type: GET_PLAYER,
      payload: playerData
    }
}


export function deletePlayerActionCreator(index) {

  return {
    type: DELETE_PLAYER,
    payload: index
  }
}

export function comparePlayersActionCreator() {
  //players is an array of player objects
  return {
    type: COMPARE_PLAYERS
  }
}
