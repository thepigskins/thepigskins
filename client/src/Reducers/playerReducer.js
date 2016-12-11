import {PLAYER_RECEIVED, REQUEST_PLAYER_ERR} from '../Actions/api';
import { GET_PLAYER, DELETE_PLAYER, COMPARE_PLAYERS, CLEAR_BEST_PLAYER } from '../Actions/playerActions';
import generatePlayerObj from './helperFunctions/generatePlayerObject';
import comparePlayers from './helperFunctions/comparePlayers';

const initialState = {
      playerData: [],
      filterOption: '',
      bestPlayer: [],
      playerToCompare: [],
      
    };

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_RECEIVED:
      const playerObj = Object.assign({}, state, {position: action.payload.position.abbreviation, name: action.name, total: action.payload.totalPoints});
      const playerData = generatePlayerObj(action.payload,action.name);
      let newState = Object.assign({}, state, {playerData: state.playerData.concat(playerData)}, {playerToCompare: state.playerToCompare.concat(playerObj)});
      return newState;

    case DELETE_PLAYER:
      let copyOfplayerData = state.playerData.slice();
      copyOfplayerData.splice(action.payload, 1);
      let newState1 = Object.assign({}, state, {playerData: copyOfplayerData});
      return newState1;

    case COMPARE_PLAYERS:
      const bestPlayers = comparePlayers(state.playerToCompare);
      console.log('frank gore ftw', bestPlayers)
      return Object.assign({}, state, { bestPlayer: state.bestPlayer.concat(bestPlayers) });

    case CLEAR_BEST_PLAYER: 
    //delete this shit, infinite state changes
      // return Object.assign({}, state, { bestPlayer: [] });

  }
  return state;
}
