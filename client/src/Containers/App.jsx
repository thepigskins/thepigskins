//App should be a container?
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Actions/playerActions';

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


  getNewPlayer(playerName) {
    console.log('sfsf')
    this.props.getPlayerActionCreator(playerName);
  }

  comparePlayers() {
    actions.comparePlayersActionCreator();
}

  deletePlayer(index) {
    actions.deletePlayerActionCreator(index);
  }

  render() {
    console.log('this.players',this.props.players.playerData)
    return (
      <div>
        <h1>The Pig Skins</h1>
        {this.props.players.bestPlayer.length > 0 && <BestPlayer playerName={this.props.players.bestPlayer} score={this.props.players.score} />}
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
  return bindActionCreators(actions,dispatch); }

// const mapDispatchToProps = (dispatch) => {
//   return {
//    getPlayerActionCreator: playerName => dispatch(actions.getPlayerActionCreator(playerName))

//   }
// }

export default connect(mapStateToProps,mapDispatchToProps)(App);
