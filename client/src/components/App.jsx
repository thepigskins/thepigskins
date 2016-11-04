//App should be a container?
import React, { Component } from 'react';

import UserInput from './UserInput';
import TableHeader from './TableHeader';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      playerData : [],
      filterOption : null,
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
      id: 99,
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
    let dataToRender = {};
    dataToRender[newPlayerData.name] = newPlayerData;
    this.setState(this.state.playerData.push(dataToRender));
  }
  render() {
    return (
      <div>
        <h1>The Pig Skins</h1>
        <UserInput getNewPlayer={this.getNewPlayer} {...this.state}/>
        {this.state.playerData > 0 && <TableHeader {...this.state} />}
      </div>
    );
  }
}