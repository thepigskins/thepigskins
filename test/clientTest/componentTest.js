import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import SearchBar from '../../client/src/components/SearchBar';
import App from '../../client/src/components/App';
import UserInput from '../../client/src/components/UserInput';


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
    expect(wrapper.state('playerData')).to.have.length(1);

    const playerData = wrapper.state('playerData')[0];
    const objKeys = Object.keys(playerData)[0];
    const numOfPlayerStats = Object.keys(playerData[objKeys]);
    console.log('numOfPlayerStats', numOfPlayerStats)
    expect(playerData[objKeys].id).to.exist;
    expect(playerData[objKeys].name).to.exist.and.to.be.a('string');  
    expect(numOfPlayerStats).to.have.length(10);
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

// describe('<')