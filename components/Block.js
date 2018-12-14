import React from 'react';
import propTypes from 'prop-types';

import './Block.scss';

export default class Block extends React.Component {
  static PropTypes = {
    children: propTypes.node.isRequired
  };
  render() {
    return (
      <div className="hm-block">
        {this.props.children}
      </div>
    );
  }
}
