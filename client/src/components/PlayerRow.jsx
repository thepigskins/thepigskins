import React, { Component } from 'react';

const PlayerRow = (props) => {
  // console.log('inside player row, player object is : ',props.playerData)
  // const playerSchema = ['name','team','position','completionPercentage',
  // 'ydsThrown','tdThrows','intThrows','rushAtt','ydsRush','receptions',
  // 'ydsReception','tdReceptions','targetReception','twoPt','fumble','tdDefense'];

  const { firstName,
          lastName,
          attemptedPasses,
          completedPasses,
          ydsThrown,
          tdThrows,
          intThrows,
          rushAtt,
          ydsRush,
          receptions,
          ydsReception,
          tdReceptions,
          targetReception,
          twoPt,
          fumble,
          tdDefense } = props.playerData;
  const { abbreviation: team } = props.playerData.team;
  const { abbreviation: position } = props.playerData.position;
  const completionPercentage = Math.round((((completedPasses / attemptedPasses) * 10) / 10)*100);
  const name = `${firstName} ${lastName}`;
  const data = [
                name,
                team,
                position,
                completionPercentage,
                ydsThrown,
                tdThrows,
                intThrows,
                rushAtt,
                ydsRush,
                receptions,
                ydsReception,
                tdReceptions,
                targetReception,
                twoPt,
                fumble,
                tdDefense
              ];
  console.log('in row', props.playerData)
  const row = props.playerData ? data.map((datum, i) => {
    return <td key={i}>{datum}</td>
  }) : '';
  return (
    <tr>{row}<button onClick={() => props.deletePlayer(props.index)}>remove player</button></tr>
  )
}

export default PlayerRow;
