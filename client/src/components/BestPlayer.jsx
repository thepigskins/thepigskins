import React from 'react';

const BestPlayer = (props) => {
  console.log('in bp', props.playerObjects)
  return (
    <div>
      {props.playerObjects.map(playerObj => <p>{playerObj.firstName} {playerObj.lastName} is the best {playerObj.position.abbreviation}</p>)}
    </div>
  )
}

export default BestPlayer;
