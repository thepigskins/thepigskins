import React from 'react';

const BestPlayer = (props) => {
  return (
    <div>
      {props.playerObjects.map(playerObj => `${playerObj.name} is the best ${playerObj.position}`)}
    </div>
  )
}

export default BestPlayer;