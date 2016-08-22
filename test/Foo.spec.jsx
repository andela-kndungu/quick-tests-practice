import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../app/components/Foo.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500 } from 'material-ui/styles/colors';

describe('A suite', () => {
  const wrapper = shallow(<Foo />);
  it('contains spec with an expectation', () => {
		// expect(wrapper.find('span')).to.have.descendants('.foo');
		expect(wrapper.find('AppBar')).to.have.prop('title').equal('Title')
  });
  it('finds nested divs', () => {
    // expect(wrapper.find('span')).to.have.descendants('#abc');
  });
});
