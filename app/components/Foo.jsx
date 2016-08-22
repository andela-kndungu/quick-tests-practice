import React, { PropTypes  } from 'react';

const propTypes = {};

const defaultProps = {};

const Abc = () => {
  return (
    <span>
      <div className="foo" />
      <div id="abc" />
    </span>
  );
};

class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Abc />);
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;

