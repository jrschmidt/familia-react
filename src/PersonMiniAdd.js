import React, { Component } from 'react';
import './PersonMiniAdd.css';
import { getPlusSignSvg } from './treeDisplaySvgs.js';

class PersonMiniAdd extends Component {

  render () {
    const cname = `PersonMiniAdd ${this.props.connect} ${this.props.viewRole}`;
    return (
      <div
        className={cname}
        onClick={ (this.props.addPerson)
          ? () => this.props.addPerson()
          : ''}
      >
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
