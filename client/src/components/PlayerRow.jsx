import React, { Component } from 'react';

const PlayerRow = (props) => {
  const playerId = Object.keys(props.playerData)[0];
  console.log(props.playerData[playerId]);
  const row = props.playerData ? Object.keys(props.playerData[playerId]).map((datum) => {
    console.log("row", props.playerData[datum])
    return <td>{props.playerData[playerId][datum]}</td>
  }) : '';
  return (<tr>{row}<button onClick={() => props.deletePlayer(props.playerData.name)}>remove player</button></tr>
  )
}

export default PlayerRow;