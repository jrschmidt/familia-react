import React, { Component } from 'react';
import './TreeDisplayCore.css';

import FocusPersonDisplayTile from './FocusPersonDisplayTile.js';
import PersonMini from './PersonMini.js';
import { getGrandparentSvg, getParentSvg, getChildrenSvg } from './treeDisplaySvgs.js';

class TreeDisplayCore extends Component {

  pushIfNotNull(arr, e) {
    if (e) arr.push(e);
    return arr;
  }

  getTags() {
    const tags = [];
    const focusGender = this.props.focusPerson.gender;
    const male = focusGender === 'male' ?
      this.props.focusPerson :
      this.props.husband;
    const female = focusGender === 'female' ?
      this.props.focusPerson :
      this.props.wife;

    if (this.props.focusPerson) {
      tags.push(
        <FocusPersonDisplayTile
        person={this.props.focusPerson}
        viewRole={focusGender === 'male' ? 'focus-male' : 'focus-female'}
        key={this.props.focusPerson._id}
        />
      );
    }

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
        viewRole='gen2-box1'
        key={this.props.fatherOfMale._id}
      />
    );

    if (this.props.motherOfMale) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.motherOfMale}
        viewRole='gen2-box2'
        key={this.props.motherOfMale._id}
      />
    );

    if (this.props.fatherOfFatherOfMale) tags.push(
      <PersonMini
        person={this.props.fatherOfFatherOfMale}
        viewRole='gen3-box1'
        key={this.props.fatherOfFatherOfMale._id}
      />
    );

    if (this.props.motherOfFatherOfMale) tags.push(
      <PersonMini
        person={this.props.motherOfFatherOfMale}
        viewRole='gen3-box2'
        key={this.props.motherOfFatherOfMale._id}
      />
    );

    if (this.props.fatherOfMotherOfMale) tags.push(
      <PersonMini
        person={this.props.fatherOfMotherOfMale}
        viewRole='gen3-box3'
        key={this.props.fatherOfMotherOfMale._id}
      />
    );

    if (this.props.motherOfMotherOfMale) tags.push(
      <PersonMini
        person={this.props.motherOfMotherOfMale}
        viewRole='gen3-box4'
        key={this.props.motherOfMotherOfMale._id}
      />
    );

    if (this.props.fatherOfFemale) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.fatherOfFemale}
        viewRole='gen2-box3'
        key={this.props.fatherOfFemale._id}
      />
    );

    if (this.props.motherOfFemale) tags.push(
      <PersonMini
        resetViewFocus={this.props.resetViewFocus}
        person={this.props.motherOfFemale}
        viewRole='gen2-box4'
        key={this.props.motherOfFemale._id}
      />
    );

    if (this.props.fatherOfFatherOfFemale) tags.push(
      <PersonMini
        person={this.props.fatherOfFatherOfFemale}
        viewRole='gen3-box5'
        key={this.props.fatherOfFatherOfFemale._id}
      />
    );

    if (this.props.motherOfFatherOfFemale) tags.push(
      <PersonMini
        person={this.props.motherOfFatherOfFemale}
        viewRole='gen3-box6'
        key={this.props.motherOfFatherOfFemale._id}
      />
    );

    if (this.props.fatherOfMotherOfFemale) tags.push(
      <PersonMini
        person={this.props.fatherOfMotherOfFemale}
        viewRole='gen3-box7'
        key={this.props.fatherOfMotherOfFemale._id}
      />
    );

    if (this.props.motherOfMotherOfFemale) tags.push(
      <PersonMini
        person={this.props.motherOfMotherOfFemale}
        viewRole='gen3-box8'
        key={this.props.motherOfMotherOfFemale._id}
      />
    );

    // SVG tags to draw connector lines between 'person' components.

    if (male) {
      this.pushIfNotNull(tags, getParentSvg(this.props.fatherOfMale, this.props.motherOfMale, 'p1'));
      this.pushIfNotNull(tags, getGrandparentSvg(this.props.fatherOfFatherOfMale, this.props.motherOfFatherOfMale, 'g1'));
      this.pushIfNotNull(tags, getGrandparentSvg(this.props.fatherOfMotherOfMale, this.props.motherOfMotherOfMale, 'g2'));
    }

    if (female) {
      this.pushIfNotNull(tags, getParentSvg(this.props.fatherOfFemale, this.props.motherOfFemale, 'p2'));
      this.pushIfNotNull(tags, getGrandparentSvg(this.props.fatherOfFatherOfFemale, this.props.motherOfFatherOfFemale, 'g3'));
      this.pushIfNotNull(tags, getGrandparentSvg(this.props.fatherOfMotherOfFemale, this.props.motherOfMotherOfFemale, 'g4'));
    }

    // // Children of focus person:
    tags.push(getChildrenSvg(focusGender));

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
