import React from 'react';
import { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  makeSearchQuery(e){
    e.preventDefault();
    const query = this.refs.playerName.value;
    this.props.getNewPlayer(query);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.makeSearchQuery.bind(this)}>
          <input 
            type='text'
            ref='playerName'
          /> 
        </form>
      </div> 
    )
  }


}

