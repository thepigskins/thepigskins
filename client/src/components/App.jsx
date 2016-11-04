//App should be a container?
import React, { Component } from 'react';
import UserInput from './UserInput';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>The Pig Skins</h1>
        <UserInput />
      </div>
    );
  }
}