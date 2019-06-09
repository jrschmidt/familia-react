import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplayCore extends Component {

  getConnectors() {
    return (
      <>
        <svg className='connect-father-mother-m' width='80' height='160'>
          <line x1='0' y1='40' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
          <line x1='40' y1='40' x2='40' y2='160' stroke='#666666' strokeWidth='5' />
        </svg>
        <svg className='connect-spouse-m' width='120' height='160'>
        <line x1='0' y1='40' x2='120' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='80' y1='40' x2='80' y2='160' stroke='#666666' strokeWidth='5' />
        </svg>
      </>
    )
  }

  render() {
    return (
      <div className='TreeDisplayCore'>
      <PersonDisplayTile person={this.props.focus} role='focus-m' key={this.props.focus._id} />
      <PersonMini person={this.props.father} role='father-m' key={this.props.father._id} />
      <PersonMini person={this.props.mother} role='mother-m' key={this.props.mother._id} />
      <PersonMini person={this.props.wife} role='wife' key={this.props.wife._id} />
      {this.getConnectors()}
      </div>
    )
  }

}

export default TreeDisplayCore;
