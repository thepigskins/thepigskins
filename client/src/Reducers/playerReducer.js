import { GET_PLAYER, DELETE_PLAYER, COMPARE_PLAYERS } from '../Actions/playerActions';

const initialState = {
      playerData: [],
      filterOption: '',
      bestPlayer: {}
    };

export default function playerReducer(state = initialState, action) {
  console.log("action", action)
  switch (action.type) {
    case GET_PLAYER:
      console.log('REDUCER', action.payload)
      let newState = Object.assign({}, state, state.playerData.concat(action.payload));
      return newState;

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