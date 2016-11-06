import React, { Component } from 'react';
import PlayerRow from './PlayerRow';
export default (props) => {
  const players = props.playerData.map((playerData) => <PlayerRow deletePlayer={props.deletePlayer} playerData={playerData} />);
  return (<div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Pass Completions</th>
                  <th>TouchDowns</th>
                  <th>Total Yards</th>
                  <th>Sacks</th>
                  <th>interceptions</th>
                  <th>Tackles</th>
                  <th>Fantasy Points</th>
                </tr>
              </thead>
              <tbody>
              {players}
              </tbody>
            </table>
          </div>
   )
}
