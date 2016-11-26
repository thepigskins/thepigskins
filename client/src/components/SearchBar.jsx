import React from 'react';
import { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  makeSearchQuery(e){
    e.preventDefault();
    this.props.formSubmit();
  }
  render() {
    return (
      <div>
        <form
        onSubmit={this.makeSearchQuery.bind(this)}>
          <input
            type='text'
            onChange={this.props.handleChange}
            value={this.props.playerName}
          />
        </form>
      </div>
    )
  }


}
