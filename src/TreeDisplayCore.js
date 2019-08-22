import React, { Component } from 'react';
import './TreeDisplayCore.css';

import PersonDisplayTile from './PersonDisplayTile.js';
import PersonMini from './PersonMini.js';
import { svgs } from './treeDisplaySvgs.js';

class TreeDisplayCore extends Component {



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
        person={this.props.fatherOfFather}
        viewRole='father-of-father'
        key={this.props.fatherOfFather._id}
      />
    );

    if (this.props.motherOfFather) tags.push(
      <PersonMini
        person={this.props.motherOfFather}
        viewRole='mother-of-father'
        key={this.props.motherOfFather._id}
      />
    );

    if (this.props.fatherOfMother) tags.push(
      <PersonMini
        person={this.props.fatherOfMother}
        viewRole='father-of-mother'
        key={this.props.fatherOfMother._id}
      />
    );

    if (this.props.motherOfMother) tags.push(
      <PersonMini
        person={this.props.motherOfMother}
        viewRole='mother-of-mother'
        key={this.props.motherOfMother._id}
      />
    );

    // SVG tags to draw connector lines between 'person' components.

    // Parents of focus person:
    if (this.props.father && this.props.mother) tags.push(svgs.svgFatherMother);
    if (this.props.father && !this.props.mother) tags.push(svgs.svgFather);
    if (this.props.mother && !this.props.father) tags.push(svgs.svgMother);

    // Paternal grandarents of focus person:
    if (this.props.fatherOfFather && this.props.motherOfFather) tags.push(svgs.svgParentsOfFather);
    if (this.props.fatherOfFather && !this.props.motherOfFather) tags.push(svgs.svgFatherOfFather);
    if (this.props.motherOfFather && !this.props.fatherOfFather) tags.push(svgs.svgMotherOfFather);

    // Maternal grandarents of focus person:
    if (this.props.fatherOfMother && this.props.motherOfMother) tags.push(svgs.svgParentsOfMother);
    if (this.props.fatherOfMother && !this.props.motherOfMother) tags.push(svgs.svgFatherOfMother);
    if (this.props.motherOfMother && !this.props.fatherOfMother) tags.push(svgs.svgMotherOfMother);

    tags.push(this.props.focusPerson.gender === 'male' ? svgs.svgChildrenOfMale : svgs.svgChildrenOfFemale);
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
