import React, { Component } from 'react';
import PlayerRow from './PlayerRow';

export default (props) => {
  const players = props.playerData.map((playerData) => <PlayerRow deletePlayer={props.deletePlayer} playerData={playerData} />);
  return (<div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Position</th>
                  <th>Status</th>
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
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
              {players}
              </tbody>
            </table>
          </div>
   )
}
