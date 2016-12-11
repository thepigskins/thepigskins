import axios from 'axios';

export const PLAYER_RECEIVED = 'PLAYER_RECEIVED';
export const REQUEST_PLAYER_ERR = 'REQUEST_PLAYER_ERR';

export function getPlayerData(playerName){
	console.log("actions", playerName)
  let firstName, lastName, playerData;
  [firstName, lastName] = playerName.trim().split(' ').map( (name) => name[0].toUpperCase().concat(name.slice(1)));
  const dbQuery = axios.get(`http://localhost:8000/findPlayer?firstName=${firstName}&lastName=${lastName}`);
  
  return (dispatch) => {
		dbQuery.then(response => {
			dispatch({
				type: PLAYER_RECEIVED,
				payload: response.data,
        name: `${firstName} ${lastName}`
			});
		})
		.catch(err => {
			dispatch({
				type: REQUEST_PLAYER_ERR,
				payload: err,
        lol: true
			})
		});
	};
}
