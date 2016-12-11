import axios from 'axios';
export const GET_PLAYER = 'GET_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const COMPARE_PLAYERS = 'COMPARE_PLAYERS';
export const CLEAR_BEST_PLAYER = 'CLEAR_BEST_PLAYER';


//http://redux.js.org/docs/advanced/AsyncFlow.html


export function deletePlayerActionCreator(index) {

  return {
    type: DELETE_PLAYER,
    payload: index
  }
}

export function comparePlayersActionCreator() {
  return {
    type: COMPARE_PLAYERS
  }
}

export function clearBestPlayerActionCreator() {
  return {
    type: CLEAR_BEST_PLAYER
  }
}

