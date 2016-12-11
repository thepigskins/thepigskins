//App should be a container?
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Actions/playerActions';
import * as actionsApi from '../Actions/api';

import UserInput from '../components/UserInput';
import TableHeader from '../components/TableHeader';
import BestPlayer from '../components/BestPlayer';

class App extends Component {
  constructor() {
    super();
    this.getNewPlayer = this.getNewPlayer.bind(this);
    this.comparePlayers = this.comparePlayers.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  componentDidUpdate() {
    console.log("blah")
    // this.props.clearBestPlayerActionCreator();
  }

  getNewPlayer(playerName) {
    console.log('actionsApi', actionsApi)
    console.log("this.props.api", this.props);
    this.props.getPlayerData(playerName);
  }

  comparePlayers() {
    this.props.comparePlayersActionCreator();
}

  deletePlayer(index) {
    this.props.deletePlayerActionCreator(index);
  }

  render() {
    console.log('this.players',this.props.players.playerData)
    return (
      <div>
        <h1>The Pig Skins</h1>
        {this.props.players.bestPlayer.length > 0 && <BestPlayer playerObjects={this.props.players.bestPlayer} />}
        <UserInput getNewPlayer={this.getNewPlayer} {...this.props.players} />
        {this.props.players.playerData.length > 0 && <TableHeader deletePlayer={this.deletePlayer} {...this.props.players} />}
        <button onClick={this.comparePlayers} className="btn btn-primary">Compare Players</button>
      </div>
    );
  }
}

App.propTypes = {
  playerData: React.PropTypes.array,
  filterOption: React.PropTypes.string
};

const mapStateToProps = (store) => { return {players : store.player}; }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, actionsApi, actions),dispatch); }

// const mapDispatchToProps = (dispatch) => {
//   return {
//    getPlayerData: playerName => dispatch(actionsApi.getPlayerData(playerName))
//   }
// }

export default connect(mapStateToProps,mapDispatchToProps)(App);
