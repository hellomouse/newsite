import React from 'react';
import PropTypes from 'prop-types';

import './Block.scss';

export default class Block extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  render() {
    return (
      <div className="hm-block">
        {this.props.children}
      </div>
    );
  }
}
