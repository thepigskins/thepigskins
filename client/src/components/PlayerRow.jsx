import React, { Component } from 'react';

const PlayerRow = (props) => {
  const playerId = Object.keys(props.playerData)[0];
  const row = props.playerData ? Object.keys(props.playerData[playerId]).map((datum) => {
    return <td>{props.playerData[playerId][datum]}</td>
  }) : '';
  return (<tr>{row}<button onClick={() => props.deletePlayer(playerId)}>remove player</button></tr>
  )
}

export default PlayerRow;