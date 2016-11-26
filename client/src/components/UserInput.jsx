import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import { getPlayerData } from '../Actions/api'
import {connect} from 'react-redux';

 //@connect((store) => { return {}})

 export default class UserInput extends Component{
   constructor(props){
     super(props);
     this.state = { playerName : '' }
     this.handleChange = this.handleChange.bind(this);
     this.formSubmit = this.formSubmit.bind(this);
   }

   handleChange(e){
     this.setState({playerName : e.target.value})
   }

   formSubmit(){
     console.log('form submitted, about to dispatch from client side');
     this.props.getNewPlayer(this.state.playerName);
     this.setState({ playerName : '' });
   }

   render(){
     return (
       <div>
        <SearchBar 
          formSubmit={this.formSubmit} 
          handleChange={this.handleChange} 
          playerName={this.state.playerName}
        />
        <Dropdown />
       </div>
        )
   }
 }
