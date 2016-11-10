//App should be a container?
import React, { Component } from 'react';

import UserInput from './UserInput';
import TableHeader from './TableHeader';
import BestPlayer from './BestPlayer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      playerData: [],
      filterOption: '',
      bestPlayer: ''
    }
    this.getNewPlayer = this.getNewPlayer.bind(this);
    this.comparePlayers = this.comparePlayers.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  componentDidMount() {

  }

  getNewPlayer(e) {
    e.preventDefault();
    //this will make an AJAX call to the API and update playerData state,
    //causing a page re-render after data is obtained with new player.
    //table component will iterate over playerData and render specific
    //data as needed.
  //   const newPlayerData =         
  //   {'2331': { 
  //     name: 'Aaron Rodgers',
  //     team: 'GB',
  //     position: 'QB',
  //     status: 'OK',
  //     'C/A': '101/114',
  //     'Pass YDS': '1919',
  //     'Pass TD': '14',
  //     INT: '0',
  //     'RUSH ATT': '14',
  //     'RUSH YDS': '101',
  //     REC: '0',
  //     'REC YDS': '0',
  //     'REC TD': '0',
  //     'REC TARGET': '0',
  //     '2PC': '0',
  //     FUML: '0',
  //     'DEFENSE TD': '0',
  //     TOTAL: '165'  
  //   }
  // };
  $.get('http://localhost:8000/test').done( (data) => {
    console.log('data', data)
    const playerID = Object.keys(data)[Math.round(Math.random() * 50)];
    const playerStats = data[playerID].STATS;
    delete data[playerID].STATS;
    const newPlayerState = Object.assign({}, data[playerID], playerStats);
    const newObj = {};
    newObj[playerID] = newPlayerState;

    console.log(JSON.stringify(newObj))
    this.setState({playerData: this.state.playerData.concat(newObj)});
  });
    // this.setState({ playerData: this.state.playerData.concat(newPlayerData) });
  }

  comparePlayers(e) {
    e.preventDefault();
    if (this.state.playerData.length < 2) alert('Please add one more players to compare');
    const bestPlayer = this.state.playerData.reduce((bestPlayer, playerObj) => {
      const playerId = Object.keys(playerObj)[0];
      console.log('playerId', playerId);
      if (playerObj[playerId].TOTAL > bestPlayer.score) {
        bestPlayer.name = playerObj[playerId].name;
        bestPlayer.score = playerObj[playerId].TOTAL;
      }
      return bestPlayer;
    }, {score : -Infinity}).name;
    
    this.setState({bestPlayer})  
  }

  deletePlayer(id) {
    const playersKept = this.state.playerData.filter((playerObj) => Object.keys(playerObj)[0] !== id);
    this.setState({ playerData: playersKept })
  }
  render() {
    console.log(this.state.playerData)
    return (
      <div>
        <h1>The Pig Skins</h1>
        {this.state.bestPlayer.length > 0 && <BestPlayer playerName={this.state.bestPlayer} />}
        <UserInput getNewPlayer={this.getNewPlayer} {...this.state} />
        {this.state.playerData.length > 0 && <TableHeader deletePlayer={this.deletePlayer} {...this.state} />}
        <button onClick={this.comparePlayers} className="btn btn-primary">Compare Players</button>
      </div>
    );
  }
}

App.propTypes = {
  playerData: React.PropTypes.array,
  filterOption: React.PropTypes.string
};