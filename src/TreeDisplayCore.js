import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';

class TreeDisplayCore extends Component {

  svgs = {

    svgParentsOfFather:
      <svg className='connect-parents-of-father' key='c-pf' width='360' height='80'>
        <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='280' y1='0' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='80' y1='40' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='180' y1='40' x2='180' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgParentsOfMother:
      <svg className='connect-parents-of-mother' key='c-pm' width='360' height='80'>
      <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='280' y1='0' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='80' y1='40' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='180' y1='40' x2='180' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgFatherMother:
      <svg className='connect-father-mother' key='c-fm' width='580' height='80'>
        <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='480' y1='0' x2='480' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='80' y1='40' x2='480' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='280' y1='40' x2='280' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgChildrenOfMale:
      <svg className='connect-children-male' key='c-cm' width='360' height='120'>
        <line x1='80' y1='40' x2='80' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='280' y1='0' x2='280' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='80' y1='80' x2='280' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='180' y1='80' x2='180' y2='120' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgChildrenOfFemale:
      <svg className='connect-children-female' key='c-cf' width='360' height='120'>
        <line x1='80' y1='0' x2='80' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='280' y1='40' x2='280' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='80' y1='80' x2='280' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='180' y1='80' x2='180' y2='120' stroke='#666666' strokeWidth='5' />
      </svg>
  };

  getTags() {
    const tags = [];

    if (this.props.focusPerson) tags.push(
      <PersonDisplayTile
        person={this.props.focusPerson}
        viewRole='focus'
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

    if (this.props.father) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.father}
        viewRole='father'
        key={this.props.father._id}
      />
    );

    if (this.props.mother) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.mother}
        viewRole='mother'
        key={this.props.mother._id}
      />
    );

    if (this.props.fatherOfFather) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.fatherOfFather}
        viewRole='father-of-father'
        key={this.props.fatherOfFather._id}
      />
    );

    if (this.props.motherOfFather) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.motherOfFather}
        viewRole='mother-of-father'
        key={this.props.motherOfFather._id}
      />
    );

    if (this.props.fatherOfMother) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.fatherOfMother}
        viewRole='father-of-mother'
        key={this.props.fatherOfMother._id}
      />
    );

    if (this.props.motherOfMother) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.motherOfMother}
        viewRole='mother-of-mother'
        key={this.props.motherOfMother._id}
      />
    );

    tags.push(this.svgs.svgParentsOfFather);
    tags.push(this.svgs.svgParentsOfMother);
    tags.push(this.svgs.svgFatherMother);
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
