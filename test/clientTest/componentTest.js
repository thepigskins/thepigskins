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