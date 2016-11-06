//App should be a container?
import React, { Component } from 'react';

import UserInput from './UserInput';
import TableHeader from './TableHeader';
import BestPlayer from './BestPlayer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      playerData: [{
        name: 'Blah Bobson',
        position: 'QB',
        passCompletions: 420,
        touchDowns: 15,
        totalYards: 1200,
        sacks: null,
        interceptions: null,
        tackles: null,
        fantasyPoints: 90
      }],
      filterOption: '',
      bestPlayer: ''
    }
    this.getNewPlayer = this.getNewPlayer.bind(this);
    this.comparePlayers = this.comparePlayers.bind(this);
  }
  getNewPlayer(e) {
    e.preventDefault();
    //this will make an AJAX call to the API and update playerData state,
    //causing a page re-render after data is obtained with new player.
    //table component will iterate over playerData and render specific
    //data as needed.
    const newPlayerData = {
      name: 'Shawn Johnson',
      position: 'QB',
      passCompletions: 420,
      touchDowns: 15,
      totalYards: 1200,
      sacks: null,
      interceptions: null,
      tackles: null,
      fantasyPoints: 100
    };
    this.setState({ playerData: this.state.playerData.concat(newPlayerData) });
  }
  comparePlayers(e) {
    e.preventDefault();
    const maxScore = this.state.playerData.reduce((maxScore, playerObj) => {
      if (maxScore < playerObj.fantasyPoints) maxScore = playerObj.fantasyPoints;
      return maxScore;
    },0);
    const bestPlayer = this.state.playerData.filter((playerObj) => playerObj.fantasyPoints === maxScore)[0].name;
    this.setState({bestPlayer});
  }
  render() {
    return (
      <div>
        <h1>The Pig Skins</h1>
        {this.state.bestPlayer.length > 0 && <BestPlayer playerName={this.state.bestPlayer}/>}
        <UserInput getNewPlayer={this.getNewPlayer} {...this.state} />
        {this.state.playerData.length > 0 && <TableHeader {...this.state} />}
        <button onClick={this.comparePlayers} className="btn btn-primary">Compare Players</button>
      </div>
    );
  }
}

App.propTypes = {
  playerData: React.PropTypes.array,
  filterOption: React.PropTypes.string
};