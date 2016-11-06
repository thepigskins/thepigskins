//App should be a container?
import React, { Component } from 'react';

import UserInput from './UserInput';
import TableHeader from './TableHeader';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      playerData : [{
      name: 'Shawn Johnson',
      position: 'QB',
      passCompletions: 420,
      touchDowns: 15,
      totalYards: 1200,
      sacks: null,
      interceptions: null,
      tackles: null,
      fantasyPoints: 100
    }],
      filterOption : '',
    }
    this.getNewPlayer = this.getNewPlayer.bind(this);
  }
  getNewPlayer(e){
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
      const newPlayerData2 = {
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
    
    //let dataToRender = {};
    // dataToRender[newPlayerData.name] = newPlayerData;
    // this.setState({playerData: this.state.playerData.concat(dataToRender)});
    this.setState({playerData: this.state.playerData.concat(newPlayerData)});
 }
  render() {
    return (
      <div>
        <h1>The Pig Skins</h1>
        <UserInput getNewPlayer={this.getNewPlayer} {...this.state}/>
        {this.state.playerData.length > 0 && <TableHeader {...this.state} />}
      </div>
    );
  }
}

App.propTypes = {
  playerData: React.PropTypes.array,
  filterOption: React.PropTypes.string
};