import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import { getPlayerData } from '../Actions/api'
import {connect} from 'react-redux';

 @connect((store) => { return {}})

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
     console.log('form submit firing with this query', this.state.playerName)
     this.props.dispatch(getPlayerData(this.state.playerName));
     this.setState({ playerName : '' });
   }

   render(){
     return (
       <div>
        <SearchBar formSubmit={this.formSubmit} handleChange={this.handleChange}/>
        <Dropdown />
       </div>
        )
   }
 }
