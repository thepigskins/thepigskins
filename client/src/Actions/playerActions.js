import axios from 'axios';
export const GET_PLAYER = 'GET_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const COMPARE_PLAYERS = 'COMPARE_PLAYERS';


//http://redux.js.org/docs/advanced/AsyncFlow.html

export function getPlayerActionCreator(playerName){
  //getPlayerActionCreator should query the DB and return a player object.
  //this will break because of async. --shawn
  let firstName, lastName, playerData;
  [firstName, lastName] = playerName.trim().split(' ').map( (name) => name[0].toUpperCase().concat(name.slice(1)));
  const dbQuery = axios.get(`http://localhost:8000/findPlayer?firstName=${firstName}&lastName=${lastName}`);
    return {
      type: GET_PLAYER,
      payload: dbQuery,
      name: firstName + ' ' + lastName
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
