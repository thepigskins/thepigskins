function generatePlayerObj(playerObj, name){
  let firstName, lastName;
  [firstName, lastName] = name.trim().split(' ').map( (name) => name[0].toUpperCase().concat(name.slice(1)));
  const playerData = {};

  const playerDataKeys = Object.keys(playerObj);
  const position = playerObj.position.abbreviation;
  const team = playerObj.team.abbreviation;
  const necKeys = playerDataKeys.filter((attr)=>{
    if (attr !== 'createdAt' && attr !== 'position' && attr !== 'team' && attr !== 'updatedAt' && attr !== 'positionId' && attr !== 'teamId' && attr !== 'id' && attr !== 'firstName' && attr !== 'lastName'){
      return attr;
    }
  });
  necKeys.push('name')
  necKeys.forEach( (stat) => {
    if (stat === 'name') {
      playerData[stat] = firstName + ' ' + lastName;
    } else {
    playerData[stat] = playerObj[stat]
  }
  });
  playerData.team = team;
  playerData.position = position;
  playerData.completionPercentage = Math.round((((playerData.completedPasses / playerData.attemptedPasses) * 10) / 10)*100);

return playerData;
}
module.exports = generatePlayerObj;
