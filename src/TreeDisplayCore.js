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
          key={this.props.focusPerson._id}
          viewRole={focusGender === 'male' ? 'focus-male' : 'focus-female'}
        />
      );
    }

    // Add wife
    if (this.props.wife) {
      tags.push(
        <PersonMini
          person={this.props.wife}
          key={this.props.wife._id}
          resetViewFocus={this.props.resetViewFocus}
          viewRole='wife'
        />
      );
    }
    else if (focusGender === 'male') {
      tags.push(
        <PersonMiniAdd
          key='add-wife'
          addPerson={this.props.addPerson}
          originPerson={this.props.focusPerson}
          connect='add-left'
          viewRole='wife'
          label='wife'
        />
      );
    }

    // Add husband
    if (this.props.husband) {
      tags.push(
        <PersonMini
          person={this.props.husband}
          key={this.props.husband._id}
          resetViewFocus={this.props.resetViewFocus}
          viewRole='husband'
        />
      );
    }
    else if (focusGender === 'female') {
      tags.push(
        <PersonMiniAdd
          key='add-husband'
          addPerson={this.props.addPerson}
          originPerson={this.props.focusPerson}
          connect='add-right'
          viewRole='husband'
          label='husband'
        />
      );
    }

    // PARENTS OF FOCUS PERSON AND SPOUSE

    // Add father of male
    if (this.props.fatherOfMale) {
      tags.push(
        <PersonMini
          person={this.props.fatherOfMale}
          key={this.props.fatherOfMale._id}
          resetViewFocus={
            (focusGender === 'male') ?
            this.props.resetViewFocus :
            null}
          viewRole='gen2-box1'
        />
      );
    }
    else if (focusGender === 'male') {
      tags.push(
        <PersonMiniAdd
          key='add-father'
          addPerson={this.props.addPerson}
          originPerson={this.props.focusPerson}
          connect='add-right'
          viewRole='gen2-box1'
          label='father'
        />
      );
    }

    // Add mother of male
    if (this.props.motherOfMale) {
      tags.push(
        <PersonMini
          person={this.props.motherOfMale}
          key={this.props.motherOfMale._id}
          resetViewFocus={
            (focusGender === 'male') ?
            this.props.resetViewFocus :
            null}
          viewRole='gen2-box2'
        />
      );
    }
    else if (focusGender === 'male') {
      tags.push(
        <PersonMiniAdd
          key='add-mother'
          addPerson={this.props.addPerson}
          originPerson={this.props.focusPerson}
          connect='add-left'
          viewRole='gen2-box2'
          label='mother'
        />
      );
    }

// Add father of female
    if (this.props.fatherOfFemale) {
      tags.push(
        <PersonMini
          person={this.props.fatherOfFemale}
          key={this.props.fatherOfFemale._id}
          resetViewFocus={
            (focusGender === 'female') ?
            this.props.resetViewFocus :
            null}
          viewRole='gen2-box3'
        />
      );
    }
    else if (focusGender === 'female') {
      tags.push(
        <PersonMiniAdd
          key='add-father'
          addPerson={this.props.addPerson}
          originPerson={this.props.focusPerson}
          connect='add-right'
          viewRole='gen2-box3'
          label='father'
        />
      );
    }

    // Add mother of female
    if (this.props.motherOfFemale) {
      tags.push(
        <PersonMini
          person={this.props.motherOfFemale}
          key={this.props.motherOfFemale._id}
          resetViewFocus={
            (focusGender === 'female') ?
            this.props.resetViewFocus :
            null}
          viewRole='gen2-box4'
        />
      );
    }
    else if (focusGender === 'female') {
      tags.push(
        <PersonMiniAdd
          key='add-mother'
          addPerson={this.props.addPerson}
          originPerson={this.props.focusPerson}
          connect='add-left'
          viewRole='gen2-box4'
          label='mother'
        />
      );
    }

    // GRANDPARENTS OF FOCUS PERSON AND SPOUSE

    if (this.props.fatherOfFatherOfMale) tags.push(
      <PersonMini
        person={this.props.fatherOfFatherOfMale}
        key={this.props.fatherOfFatherOfMale._id}
        resetViewFocus={null}
        viewRole='gen3-box1'
      />
    );

    if (this.props.motherOfFatherOfMale) tags.push(
      <PersonMini
        person={this.props.motherOfFatherOfMale}
        key={this.props.motherOfFatherOfMale._id}
        resetViewFocus={null}
        viewRole='gen3-box2'
      />
    );

    if (this.props.fatherOfMotherOfMale) tags.push(
      <PersonMini
        person={this.props.fatherOfMotherOfMale}
        key={this.props.fatherOfMotherOfMale._id}
        resetViewFocus={null}
        viewRole='gen3-box3'
      />
    );

    if (this.props.motherOfMotherOfMale) tags.push(
      <PersonMini
        person={this.props.motherOfMotherOfMale}
        key={this.props.motherOfMotherOfMale._id}
        resetViewFocus={null}
        viewRole='gen3-box4'
      />
    );

    if (this.props.fatherOfFatherOfFemale) tags.push(
      <PersonMini
        person={this.props.fatherOfFatherOfFemale}
        key={this.props.fatherOfFatherOfFemale._id}
        resetViewFocus={null}
        viewRole='gen3-box5'
      />
    );

    if (this.props.motherOfFatherOfFemale) tags.push(
      <PersonMini
        person={this.props.motherOfFatherOfFemale}
        key={this.props.motherOfFatherOfFemale._id}
        resetViewFocus={null}
        viewRole='gen3-box6'
      />
    );

    if (this.props.fatherOfMotherOfFemale) tags.push(
      <PersonMini
        person={this.props.fatherOfMotherOfFemale}
        key={this.props.fatherOfMotherOfFemale._id}
        resetViewFocus={null}
        viewRole='gen3-box7'
      />
    );

    if (this.props.motherOfMotherOfFemale) tags.push(
      <PersonMini
        person={this.props.motherOfMotherOfFemale}
        key={this.props.motherOfMotherOfFemale._id}
        resetViewFocus={null}
        viewRole='gen3-box8'
      />
    );

    // SVG tags to draw connector lines between 'person' components.

    if (male) {
      tags.push(getParentSvg(
        (focusGender === 'male'),
        this.props.fatherOfMale,
        this.props.motherOfMale,
        'p1'
      ));
      tags.push(getGrandparentSvg(
        this.props.fatherOfFatherOfMale,
        this.props.motherOfFatherOfMale,
        'g1'
      ));
      tags.push(getGrandparentSvg(
        this.props.fatherOfMotherOfMale,
        this.props.motherOfMotherOfMale,
        'g2'
      ));
    }

    if (female) {
      tags.push(getParentSvg(
        (focusGender === 'female'),
        this.props.fatherOfFemale,
        this.props.motherOfFemale,
        'p2'));
      tags.push(getGrandparentSvg(
        this.props.fatherOfFatherOfFemale,
        this.props.motherOfFatherOfFemale,
        'g3'
      ));
      tags.push(getGrandparentSvg(
        this.props.fatherOfMotherOfFemale,
        this.props.motherOfMotherOfFemale,
        'g4'
      ));
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
