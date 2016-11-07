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
                  <th>Completion Percentage</th>
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

  // { name: 'Tom Brady',
  //   team: 'NE',
  //   position: 'QB',
  //   status: 'OK',
  //   STATS: 
  //    { 'C/A': '98/134',
  //      'Pass YDS': '1319',
  //      'Pass TD': '12',
  //      INT: '0',
  //      'RUSH ATT': '10',
  //      'RUSH YDS': '44',
  //      REC: '0',
  //      'REC YDS': '0',
  //      'REC TD': '0',
  //      'REC TARGET': '0',
  //      '2PC': '0',
  //      FUML: '0',
  //      'DEFENSE TD': '0',
  //      TOTAL: '102' } },