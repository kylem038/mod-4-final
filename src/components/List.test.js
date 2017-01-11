import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import { shallow, mount } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
});

describe('List', () => {

  it.skip('renders the initial 3 grudges', () => {
    const wrapper = shallow(<List / >);

  });
});
