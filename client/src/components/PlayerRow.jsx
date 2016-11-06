import React, { Component } from 'react';

const PlayerRow = (props) => {
  const row = props.playerData ? Object.keys(props.playerData).map((datum) => {
    return <td>{props.playerData[datum]}</td>
  }) : '';
  return (<tr>{row}</tr>
  )
}

export default PlayerRow;