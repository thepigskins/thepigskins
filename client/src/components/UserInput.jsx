import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';


export default (props) => {
  console.log('props', props)
  return (
    <div>
      <SearchBar getNewPlayer={props.getNewPlayer}/>
      <Dropdown />
    </div>
  )
}