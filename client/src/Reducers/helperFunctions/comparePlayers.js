function comparePlayers(playersArr) {

  const positions = {
    'QB': null,
    'RB': null,
    'WR': null,
    'TE': null,
    'K': null,
    'DEF': null
  }

  const bestPlayers = [];

  playersArr.forEach(player => {
    const playerPosition = player.position.abbreviation;
    if (!positions[playerPosition] || player.totalPoints > positions[playerPosition].totalPoints){
      positions[playerPosition] = player;
    }
  })
  for(let position in positions){
    if (positions[position]) bestPlayers.push(positions[position]);
  }
  console.log("These are the best players", bestPlayers)
  return bestPlayers;
}


export default comparePlayers;
