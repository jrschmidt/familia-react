import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplayCore extends Component {

  svgs = {

    svgFatherMotherMale:
      <svg className='connect-father-mother-male' width='280' height='80'>
        <line x1='40' y1='0' x2='40' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='240' y1='0' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='40' y1='40' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='140' y1='40' x2='140' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgFatherMotherFemale:
      <svg className='connect-father-mother-female' width='280' height='80'>
        <line x1='40' y1='0' x2='40' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='240' y1='0' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='40' y1='40' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='140' y1='40' x2='140' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgChildrenMale:
      <svg className='connect-children-male' width='440' height='120'>
        <line x1='20' y1='40' x2='20' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='420' y1='0' x2='420' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='20' y1='80' x2='420' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='220' y1='80' x2='220' y2='120' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgChildrenFemale:
      <svg className='connect-children-female' width='440' height='120'>
        <line x1='20' y1='0' x2='20' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='420' y1='40' x2='420' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='20' y1='80' x2='420' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='220' y1='80' x2='220' y2='120' stroke='#666666' strokeWidth='5' />
      </svg>
  };

  getTags() {
    const tags = [];
    if (this.props.focusPerson) tags.push(
      <PersonDisplayTile person={this.props.focusPerson} />
    );
    if (this.props.husband) tags.push(
      <PersonMini person={this.props.husband} viewRole='husband' key={this.props.husband._id} />
    );
    if (this.props.wife) tags.push(
      <PersonMini person={this.props.wife} viewRole='wife' key={this.props.wife._id} />
    );
    if (this.props.fatherMale) tags.push(
      <PersonMini person={this.props.fatherMale} viewRole='father-m' key={this.props.fatherMale._id} />
    );
    if (this.props.motherMale) tags.push(
      <PersonMini person={this.props.motherMale} viewRole='mother-m' key={this.props.motherMale._id} />
    );
    if (this.props.fatherFemale) tags.push(
      <PersonMini person={this.props.fatherFemale} viewRole='father-f' key={this.props.fatherFemale._id} />
    );
    if (this.props.motherFemale) tags.push(
      <PersonMini person={this.props.motherFemale} viewRole='mother-f' key={this.props.motherFemale._id} />
    );
    return tags;
  }

  render() {
    return (
      <div className='TreeDisplayCore'>
        {this.getTags()}
      </div>
    )

    // {this.svgs.svgFatherMotherMale}
    // {this.svgs.svgFatherMotherFemale}
    // {this.props.leftRight === 'left' ? this.svgs.svgChildrenMale : this.svgs.svgChildrenFemale}

  }

}

export default TreeDisplayCore;
