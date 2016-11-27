import {PLAYER_RECEIVED, REQUEST_PLAYER_ERR} from '../Actions/api';
import { GET_PLAYER, DELETE_PLAYER, COMPARE_PLAYERS } from '../Actions/playerActions';
import generatePlayerObj from './helperFunctions/generatePlayerObject';

const initialState = {
      playerData: [],
      filterOption: '',
      bestPlayer: {}
    };

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_RECEIVED:
      console.log('is this the data you"re looking for? inside rP reducer',action.payload)
      // action.payload.then(playerDataObj => {
        const playerData = generatePlayerObj(action.payload,action.name);
        let newState = Object.assign({}, state, {playerData: state.playerData.concat(playerData)});
      //   console.log('newState is ', newState, 'playerData is ', playerData)
      console.log('newState', newState)
        return newState;
      // });
    case DELETE_PLAYER:
      let copyOfplayerData = state.playerData.slice();
      copyOfplayerData.splice(action.payload, 1);
      let newState1 = Object.assign({}, state, {playerData: copyOfplayerData});
      return newState1;

    case COMPARE_PLAYERS:


      if (state.playerData.length < 2) alert('Please add one more players to compare');
      const bestPlayer = state.playerData.reduce((bestPlayer, playerObj) => {
        const playerId = Object.keys(playerObj)[0];
        console.log('playerId', playerId);
        if (playerObj[playerId].TOTAL > bestPlayer.score) {
          bestPlayer.name = playerObj[playerId].name;
          bestPlayer.score = playerObj[playerId].TOTAL;
        }
        return bestPlayer;
      }, {score : -Infinity});

      let newState2 = Object.assign({}, state, {bestPlayer})
      return newState2;
  }
  return state;
}
