import React, { Component } from 'react';
import PlayerRow from './PlayerRow';

export default (props) => {
  console.log('am i getting rendered')
  const players = props.playerData.map((playerData, i) => <PlayerRow index={i} deletePlayer={props.deletePlayer} playerData={playerData} />);
  return (<div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Position</th>
                  <th>Completion %</th>
                  <th>Pass Yards</th>
                  <th>Pass TD</th>
                  <th>Int</th>
                  <th>Rush Att</th>
                  <th>Rush Yards</th>
                  <th>Receptions</th>
                  <th>Rec Yards</th>
                  <th>Rec TD</th>
                  <th>Rec Targets</th>
                  <th>2PC</th>
                  <th>Fumbles</th>
                  <th>Defense TD</th>
                </tr>
              </thead>
              <tbody>
              {players}
              </tbody>
            </table>
          </div>
   )
}
