import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplayCore extends Component {

  svgs = {

    svgFatherMotherOfMale:
      <svg className='connect-father-mother-male' key='c-fmm' width='280' height='80'>
        <line x1='40' y1='0' x2='40' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='240' y1='0' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='40' y1='40' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='140' y1='40' x2='140' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgFatherMotherOfFemale:
      <svg className='connect-father-mother-female' key='c-fmf' width='280' height='80'>
        <line x1='40' y1='0' x2='40' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='240' y1='0' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='40' y1='40' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='140' y1='40' x2='140' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgChildrenOfMale:
      <svg className='connect-children-male' key='c-cm' width='440' height='120'>
        <line x1='20' y1='40' x2='20' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='420' y1='0' x2='420' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='20' y1='80' x2='420' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='220' y1='80' x2='220' y2='120' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgChildrenOfFemale:
      <svg className='connect-children-female' key='c-cf' width='440' height='120'>
        <line x1='20' y1='0' x2='20' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='420' y1='40' x2='420' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='20' y1='80' x2='420' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='220' y1='80' x2='220' y2='120' stroke='#666666' strokeWidth='5' />
      </svg>
  };

  getTags() {
    const tags = [];
    if (this.props.focusPerson) tags.push(
      <PersonDisplayTile
        person={this.props.focusPerson}
        viewRole={this.props.focusPerson.gender === 'male' ? 'focus-m' : 'focus-f'}
        key={this.props.focusPerson._id}
      />
    );
    if (this.props.husband) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.husband}
        viewRole='husband'
        key={this.props.husband._id}
      />
    );
    if (this.props.wife) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.wife}
        viewRole='wife'
        key={this.props.wife._id}
      />
    );
    if (this.props.fatherOfMale) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.fatherOfMale}
        viewRole='father-m'
        key={this.props.fatherOfMale._id}
      />
    );
    if (this.props.motherOfMale) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.motherOfMale}
        viewRole='mother-m'
        key={this.props.motherOfMale._id}
      />
    );
    if (this.props.fatherOfFemale) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.fatherOfFemale}
        viewRole='father-f'
        key={this.props.fatherOfFemale._id}
      />
    );
    if (this.props.motherOfFemale) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.motherOfFemale}
        viewRole='mother-f'
        key={this.props.motherOfFemale._id}
      />
    );
    tags.push(this.svgs.svgFatherMotherOfMale);
    tags.push(this.svgs.svgFatherMotherOfFemale);
    tags.push(this.props.focusPerson.gender === 'male' ? this.svgs.svgChildrenOfMale : this.svgs.svgChildrenOfFemale);
    return tags;
  }

  render() {
    return (
      <div className='TreeDisplayCore'>
        {this.getTags()}
      </div>
    )
  }

}

export default TreeDisplayCore;
