function comparePlayers(playersArr) {
  //players have same position
  //reduce array to
  const positions = {
    'QB': null,
    'RB': null,
    'WR': null,
    'TE': null,
    'K': null,
    'DEF': null
  }

  console.log("playersArr", playersArr)

  const bestPlayers = [];
  playersArr.forEach(player => {
    if (!positions[player.position] || player.total > positions[player.position].total){
      positions[player.position] = player;
    }
  })
  for(let position in positions){
    if (positions[position]) bestPlayers.push(positions[position]);
  }
  return bestPlayers;
}


export default comparePlayers;