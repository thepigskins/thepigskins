import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import SearchBar from '../../client/src/components/SearchBar';
import App from '../../client/src/components/App';
import UserInput from '../../client/src/components/UserInput';
import TableHeader from '../../client/src/components/TableHeader';


describe('<App />', function() {
  it('Should be able to render UserInput', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(UserInput)).to.have.length(1);
  })

  it('should have proper data types for state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('playerData')).to.be.an('array');
    expect(wrapper.state('filterOption')).to.be.a('string');
  });

  it('should update player state on form submission when user clicks return key', () => {
    const wrapper = mount(<App />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('playerData')).to.have.length(2);
  })
  it('should render player data with an ID', function(){
    const wrapper = mount(<App />);
    const newPlayer =
       {'420': 
        { name: 'Tom Brady',
          team: 'NE',
          position: 'QB',
          status: 'OK',
          'C/A': '98/134',
          'Pass YDS': '1319',
          'Pass TD': '12',
           INT: '0',
          'RUSH ATT': '10',
          'RUSH YDS': '44',
           REC: '0',
          'REC YDS': '0',
          'REC TD': '0',
          'REC TARGET': '0',
          '2PC': '0',
           FUML: '0',
          'DEFENSE TD': '0',
           TOTAL: '102'  
          }
        };
    const state = wrapper.state('playerData');
    wrapper.setState({'playerData' : state.concat(newPlayer)});
    const ID = Object.keys(wrapper.state('playerData')[1])[0];
    console.log(ID);
    const isStringNumber = ID.match(/[0-9]/gi);
    expect(isStringNumber).to.have.length(ID.length);
  })
});

describe('<SearchBar />', function() {
  it('Should be able to take an input', function() {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have props for searchBar', function () {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined; 
  })
});

describe('<TableHeader />', function() {
  it('should not render table header when there is no player data', function(){
    const wrapper = mount(<App />);
    wrapper.setState({'playerData' : []});
    expect(wrapper.find('table')).to.have.length(0);
  })
  it('should render table header when there is player data', function(){
    const wrapper = mount(<App />);
    const state = wrapper.state('playerData');
    wrapper.setState({playerData : state.concat({'football':'ballfoot'})});
    expect(wrapper.find('table')).to.have.length(1);
  })
})