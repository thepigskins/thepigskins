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
    actions.getPlayerActionCreator(playerName);
  }

  comparePlayers() {
    actions.comparePlayersActionCreator();
}

  deletePlayer(index) {
    actions.deletePlayerActionCreator(index);
  }

  render() {
    return (
      <div>
        <h1>The Pig Skins</h1>
        {this.props.players.bestPlayer.length > 0 && <BestPlayer playerName={this.props.players.bestPlayer} score={this.props.players.score} />}
        <UserInput getNewPlayer={this.getNewPlayer} {...this.players} />
        {this.props.players.playerData.length > 0 && <TableHeader deletePlayer={this.deletePlayer} {...this.players} />}
        <button onClick={this.comparePlayers} className="btn btn-primary">Compare Players</button>
      </div>
    );
  }
}

App.propTypes = {
  playerData: React.PropTypes.array,
  filterOption: React.PropTypes.string
};

const mapStateToProps = (state) => { return {players : state.player}; }
const mapDispatchToProps = (dispatch) => { return bindActionCreators(actions,dispatch); }
export default connect(mapStateToProps,mapDispatchToProps)(App);