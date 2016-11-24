import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import { getPlayerData } from ''
import { connect } from 'react-redux';

 @connect((store) => {});

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

   formSubmit(e){
     e.preventDefault();
     console.log('form submit firing with this query', this.state.playerName)
     this.props.dispatch(getPlayerData(this.state.playerName));
   }

   componentWillUpdate(){
     this.setState({ playerName : '' });
   }

   render(){
     return (
       <div>
        <SearchBar getNewPlayer={this.formSubmit}/>
        <Dropdown />
       </div>
        )
   }
 }
