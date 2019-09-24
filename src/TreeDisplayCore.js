import React, { Component } from 'react';
import './TreeDisplayCore.css';

import FocusPersonDisplayTile from './FocusPersonDisplayTile.js';
import PersonMini from './PersonMini.js';
import PersonMiniAdd from './PersonMiniAdd.js';
import { getGrandparentSvg, getParentSvg, getChildrenSvg } from './treeDisplaySvgs.js';

class TreeDisplayCore extends Component {

  getTags() {
    let tags = [];
    const focusGender = this.props.focusPerson.gender;
    const male = focusGender === 'male' ?
      this.props.focusPerson :
      this.props.husband;
    const female = focusGender === 'female' ?
      this.props.focusPerson :
      this.props.wife;

    // FOCUS PERSON AND SPOUSE

    // Add focus person
    if (this.props.focusPerson) {
      tags.push(
        <FocusPersonDisplayTile
          person={this.props.focusPerson}
          viewRole={focusGender === 'male' ? 'focus-male' : 'focus-female'}
          key={this.props.focusPerson._id}
        />
      );
    }

    // Add wife
    if (this.props.wife) {
      tags.push(
        <PersonMini
          resetViewFocus={this.props.resetViewFocus}
          person={this.props.wife}
          viewRole='wife'
          key={this.props.wife._id}
        />
      );
    }
    else if (focusGender === 'male') {
      tags.push(
        <PersonMiniAdd
          viewRole='wife'
          key='add-wife'
        />
      );
    }

    // Add husband
    if (this.props.husband) {
      tags.push(
        <PersonMini
          resetViewFocus={this.props.resetViewFocus}
          person={this.props.husband}
          viewRole='husband'
          key={this.props.husband._id}
        />
      );
    }
    else if (focusGender === 'female') {
      tags.push(
        <PersonMiniAdd
          viewRole='husband'
          key='add-husband'
        />
      );
    }

    // PARENTS OF FOCUS PERSON AND SPOUSE

    // Add father of male
    if (this.props.fatherOfMale) {
      tags.push(
        <PersonMini
          resetViewFocus={
            (focusGender === 'male') ?
            this.props.resetViewFocus :
            null}
          person={this.props.fatherOfMale}
          viewRole='gen2-box1'
          key={this.props.fatherOfMale._id}
        />
      );
    }
    else if (focusGender === 'male') {
      tags.push(
        <PersonMiniAdd
          viewRole='gen2-box1'
          key='add-father'
        />
      );
    }

    // Add mother of male
    if (this.props.motherOfMale) {
      tags.push(
        <PersonMini
          resetViewFocus={
            (focusGender === 'male') ?
            this.props.resetViewFocus :
            null}
          person={this.props.motherOfMale}
          viewRole='gen2-box2'
          key={this.props.motherOfMale._id}
        />
      );
    }
    else if (focusGender === 'male') {
      tags.push(
        <PersonMiniAdd
          viewRole='gen2-box2'
          key='add-mother'
        />
      );
    }

// Add father of female
    if (this.props.fatherOfFemale) {
      tags.push(
        <PersonMini
          resetViewFocus={
            (focusGender === 'female') ?
            this.props.resetViewFocus :
            null}
          person={this.props.fatherOfFemale}
          viewRole='gen2-box3'
          key={this.props.fatherOfFemale._id}
        />
      );
    }
    else if (focusGender === 'female') {
      tags.push(
        <PersonMiniAdd
          viewRole='gen2-box3'
          key='add-father'
        />
      );
    }

    // Add mother of female
    if (this.props.motherOfFemale) {
      tags.push(
        <PersonMini
          resetViewFocus={
            (focusGender === 'female') ?
            this.props.resetViewFocus :
            null}
          person={this.props.motherOfFemale}
          viewRole='gen2-box4'
          key={this.props.motherOfFemale._id}
        />
      );
    }
    else if (focusGender === 'female') {
      tags.push(
        <PersonMiniAdd
          viewRole='gen2-box4'
          key='add-mother'
        />
      );
    }

    // GRANDPARENTS OF FOCUS PERSON AND SPOUSE

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
      tags.push(getParentSvg(this.props.fatherOfMale, this.props.motherOfMale, 'p1'));
      tags.push(getGrandparentSvg(this.props.fatherOfFatherOfMale, this.props.motherOfFatherOfMale, 'g1'));
      tags.push(getGrandparentSvg(this.props.fatherOfMotherOfMale, this.props.motherOfMotherOfMale, 'g2'));
    }

    if (female) {
      tags.push(getParentSvg(this.props.fatherOfFemale, this.props.motherOfFemale, 'p2'));
      tags.push(getGrandparentSvg(this.props.fatherOfFatherOfFemale, this.props.motherOfFatherOfFemale, 'g3'));
      tags.push(getGrandparentSvg(this.props.fatherOfMotherOfFemale, this.props.motherOfMotherOfFemale, 'g4'));
    }

    // // Children of focus person:
    tags.push(getChildrenSvg(focusGender));

    tags = tags.filter(tag=>!!tag);
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
