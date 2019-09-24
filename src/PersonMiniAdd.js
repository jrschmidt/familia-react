import React, { Component } from 'react';
import './PersonMiniAdd.css';
import { getPlusSignSvg } from './treeDisplaySvgs.js';

class PersonMiniAdd extends Component {

  render () {
    return (
      <div className={'PersonMiniAdd ' + this.props.viewRole}>
      {getPlusSignSvg()}
      <span>Add Person ...</span>
      </div>
    )
  }
}

export default PersonMiniAdd;
