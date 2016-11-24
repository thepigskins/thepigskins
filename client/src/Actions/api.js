import axios from 'axios';

export const REQUEST_PLAYER = 'REQUEST_PLAYER';
export const REQUEST_PLAYER_ERR = 'REQUEST_PLAYER_ERR';

export function getPlayerData(playerName){
  let firstName, lastName, playerData;
  [firstName, lastName] = playerName.trim().split(' ').map( (name) => name[0].toUpperCase().concat(name.slice(1)));
  const dbQuery = axios.get(`http://localhost:8000/findPlayer?firstName=${firstName}&lastName=${lastName}`);
  return (dispatch) => {
		dbQuery.then(response => {
			dispatch({
				type: REQUEST_PLAYER,
				payload: response.data
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
