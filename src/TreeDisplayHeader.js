import React, { Component } from 'react';
import './TreeDisplayHeader.css';

class TreeDisplayHeader extends Component {

  render () {
    return (
      <div className="TreeDisplayHeader">
        <h5>{this.props.headline}</h5>
        <h6>{this.props.tagline1}</h6>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default TreeDisplayHeader;
