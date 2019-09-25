import React, { Component } from 'react';
import './PersonMiniAdd.css';
import { getPlusSignSvg } from './treeDisplaySvgs.js';

class PersonMiniAdd extends Component {

  render () {
    return (
      <div className={'PersonMiniAdd ' + this.props.viewRole}>
        <div className='add-box'>
          {getPlusSignSvg()}
          <div className='add-text'>
            <p className='add-add'>ADD</p>
            <p className='add-label'>{this.props.label}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonMiniAdd;
