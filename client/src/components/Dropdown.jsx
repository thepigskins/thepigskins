import React from 'react';
import { Component, PropTypes } from 'react';

export default class Dropdown extends Component {
  render() {
    return (
      <div>
        <div className="dropdown open">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <p className="dropdown-item">Action</p>
            <p className="dropdown-item">Another action</p>
            <p className="dropdown-item">Something else here</p>
          </div>
        </div>
      </div> 
    )
  }


}

