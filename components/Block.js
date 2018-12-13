import React from 'react';

import './Block.scss';

export default class Block extends React.Component {
  render() {
    return (
      <div className="hm-block">
        {this.props.children}
      </div>
    );
  }
}