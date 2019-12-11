import React, { Component } from 'react';
import './PersonMiniAdd.css';
import { getPlusSignSvg } from './treeDisplaySvgs.js';

class PersonMiniAdd extends Component {

  render () {
    const cname = `PersonMiniAdd ${this.props.connect} ${this.props.viewRole}`;
    const newPerson = {
      firstname: 'Test',
      surname: 'Person',
      gender: (this.props.title === 'child') ? 'female' : null
    };
    return (
      <div
        className={cname}
        onClick={ (this.props.addPerson)
          ? () => this.props.addPerson(this.props.originPerson, this.props.title, newPerson)
          : ''}
      >
        <div className='add-box'>
          {getPlusSignSvg()}
          <div className='add-text'>
            <p className='add-add'>ADD</p>
            <p className='add-title'>{this.props.title}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonMiniAdd;
