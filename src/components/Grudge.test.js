import React from 'react';
import ReactDOM from 'react-dom';
import Grudge from './Grudge';
import { shallow, mount } from 'enzyme';

describe('A Grudge', () => {

  it.skip('renders an h3 for the name', () => {
    let wrapper = shallow(<Grudge />);
    expect(wrapper.contains('<h3>')).toEqual(true);
  });

  it.skip('renders a ptag for the offense', () => {
    let wrapper = shallow(<Grudge />);
    expect(wrapper.contains('<p>')).toEqual(true);
  });

  it.skip('renders a button to toggleForgiveness', () => {
    let wrapper = shallow(<Grudge />);
    expect(wrapper.contains('<button>')).toEqual(true);
  });

});
