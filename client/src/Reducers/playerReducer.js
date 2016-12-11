import {PLAYER_RECEIVED, REQUEST_PLAYER_ERR} from '../Actions/api';
import { GET_PLAYER, DELETE_PLAYER, COMPARE_PLAYERS, CLEAR_BEST_PLAYER } from '../Actions/playerActions';
import comparePlayers from './helperFunctions/comparePlayers';

const initialState = {
      playerData: [],
      filterOption: '',
      bestPlayer: []
    };

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_RECEIVED:
      return Object.assign({}, state, {playerData: state.playerData.concat(action.payload)});

    case DELETE_PLAYER:
      let copyOfplayerData = state.playerData.slice();
      copyOfplayerData.splice(action.payload, 1);
      return Object.assign({}, state, {playerData: copyOfplayerData});

    case COMPARE_PLAYERS:
      const bestPlayer = comparePlayers(state.playerData);
      return Object.assign({}, state, { bestPlayer });

  }
  return state;
}
