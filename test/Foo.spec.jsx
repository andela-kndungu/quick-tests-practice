import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../app/components/Foo.jsx';

describe('A suite', () => {
  const wrapper = mount(<Foo />);
  it('contains spec with an expectation', () => {
    expect(wrapper.find('span')).to.have.descendants('.foo');
  });
  it('finds nested divs', () => {
    expect(wrapper.find('span')).to.have.descendants('#abc');
  });
});
