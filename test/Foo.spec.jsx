import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../app/components/Foo.jsx';

describe('A suite', () => {
  const wrapper = shallow(<Foo />);
  it('contains spec with an expectation', () => {
    expect(wrapper.find('div')).to.have.className('foo');
  });
});
