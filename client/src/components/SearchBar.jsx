import React from 'react';
import { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getNewPlayer} action="">
          <input 
            type='text'
          /> 
        </form>
      </div> 
    )
  }


}

