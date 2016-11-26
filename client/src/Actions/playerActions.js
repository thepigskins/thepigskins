import axios from 'axios';
export const GET_PLAYER = 'GET_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const COMPARE_PLAYERS = 'COMPARE_PLAYERS';


//http://redux.js.org/docs/advanced/AsyncFlow.html


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
