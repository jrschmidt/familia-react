import React, { Component } from 'react';
import './TreeDisplayHeader.css';

class TreeDisplayHeader extends Component {

  render () {
    return (
      <div className="TreeDisplayHeader">
        <h5>{this.props.headline}</h5>
        <h6>{this.props.tagline1}</h6>
        <h6>{this.props.tagline2}</h6>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default TreeDisplayHeader;


// Sample tag with props:
// <TreeDisplayHeader
//   headline='Family Tree Display'
//   tagline1={tag1}
//   tagline2={tag2}
//   text='Click on a name to change focus person'
// />
