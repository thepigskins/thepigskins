import React, { Component } from 'react';
import PlayerRow from './PlayerRow';
export default (props) => {
  const players = props.playerData.map((playerData) => <PlayerRow deletePlayer={props.deletePlayer} playerData={playerData} />);
  return (<div>
            <table className="table">
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

    // {'2331': { 
    //   name: 'Aaron Rodgers',
    //   team: 'GB',
    //   position: 'QB',
    //   status: 'OK',
    //   'C/A': '101/114',
    //   'Pass YDS': '1919',
    //   'Pass TD': '14',
    //   INT: '0',
    //   'RUSH ATT': '14',
    //   'RUSH YDS': '101',
    //   REC: '0',
    //   'REC YDS': '0',
    //   'REC TD': '0',
    //   'REC TARGET': '0',
    //   '2PC': '0',
    //   FUML: '0',
    //   'DEFENSE TD': '0',
    //   TOTAL: '165'  
    // }