import axios from 'axios';
export const GET_PLAYER = 'GET_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const COMPARE_PLAYERS = 'COMPARE_PLAYERS';

//http://redux.js.org/docs/advanced/AsyncFlow.html

export function getPlayerActionCreator(playerName){
  //getPlayerActionCreator should query the DB and return a player object.
  //this will break because of async. --shawn
  const playerData = {};

  axios.get('http://localhost:8000/test')
    .then(data => {
      const playerID = Object.keys(data.data)[Math.round(Math.random() * 50)];
      const playerStats = data.data[playerID].STATS;
      delete data.data[playerID].STATS;
      const newPlayerState = Object.assign({}, data.data[playerID], playerStats);
      playerData[playerID] = newPlayerState;

      console.log('PLAYERDATA', playerName)
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