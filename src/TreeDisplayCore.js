import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplayCore extends Component {

  svgs = {

    svgFatherMotherLeft:
      <svg className='connect-father-mother-left' width='80' height='160'>
        <line x1='0' y1='40' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='40' y1='40' x2='40' y2='160' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgFatherMotherRight:
      <svg className='connect-father-mother-right' width='80' height='160'>
        <line x1='0' y1='40' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='40' y1='40' x2='40' y2='160' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgSpouseChildrenLeft:
      <svg className='connect-spouse-left' width='120' height='160'>
        <line x1='0' y1='40' x2='120' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='80' y1='40' x2='80' y2='160' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgSpouseChildrenRight:
      <svg className='connect-spouse-right' width='120' height='160'>
        <line x1='0' y1='40' x2='120' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='40' y1='40' x2='40' y2='160' stroke='#666666' strokeWidth='5' />
      </svg>
  };

  render() {
    return (
      <div className='TreeDisplayCore'>
        <PersonDisplayTile person={this.props.focus} role='focus-m' key={this.props.focus._id} />
        <PersonMini person={this.props.father} role='father-m' key={this.props.father._id} />
        <PersonMini person={this.props.mother} role='mother-m' key={this.props.mother._id} />
        <PersonMini person={this.props.wife} role='wife' key={this.props.wife._id} />
        {this.props.leftRight === 'left' ? this.svgs.svgFatherMotherLeft : this.svgs.svgFatherMotherRight}
        {this.props.leftRight === 'left' ? this.svgs.svgSpouseChildrenLeft : this.svgs.svgSpouseChildrenRight}
      </div>
    )
  }

}

export default TreeDisplayCore;
