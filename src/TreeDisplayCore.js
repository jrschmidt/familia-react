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

    // FOCUS PERSON AND SPOUSE

    // Add focus person
    if (this.props.focusPerson) {
      tags.push(
        <FocusPersonDisplayTile
          person={this.props.focusPerson}
          key={this.props.focusPerson._id}
          viewRole={'focus'}
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

    // PARENTS OF FOCUS PERSON

    // Add father
    if (this.props.father) {
      tags.push(
        <PersonMini
          person={this.props.father}
          key={this.props.father._id}
          resetViewFocus={this.props.resetViewFocus}
          viewRole='father'
        />
      );
    }
    else {
      tags.push(
        <PersonMiniAdd
          key='add-father'
          addPerson={this.props.addPerson}
          originPerson={this.props.focusPerson}
          connect='add-right'
          viewRole='father'
          label='father'
        />
      );
    }

    // Add mother
    if (this.props.mother) {
      tags.push(
        <PersonMini
          person={this.props.mother}
          key={this.props.mother._id}
          resetViewFocus={this.props.resetViewFocus}
          viewRole='mother'
        />
      );
    }
    else {
      tags.push(
        <PersonMiniAdd
          key='add-mother'
          addPerson={this.props.addPerson}
          originPerson={this.props.focusPerson}
          connect='add-left'
          viewRole='mother'
          label='mother'
        />
      );
    }

    // GRANDPARENTS OF FOCUS PERSON

    if (this.props.fatherOfFather) tags.push(
      <PersonMini
        person={this.props.fatherOfFather}
        key={this.props.fatherOfFather._id}
        resetViewFocus={null}
        viewRole='gen3-box1'
      />
    );

    if (this.props.motherOfFather) tags.push(
      <PersonMini
        person={this.props.motherOfFather}
        key={this.props.motherOfFather._id}
        resetViewFocus={null}
        viewRole='gen3-box2'
      />
    );

    if (this.props.fatherOfMother) tags.push(
      <PersonMini
        person={this.props.fatherOfMother}
        key={this.props.fatherOfMother._id}
        resetViewFocus={null}
        viewRole='gen3-box3'
      />
    );

    if (this.props.motherOfMother) tags.push(
      <PersonMini
        person={this.props.motherOfMother}
        key={this.props.motherOfMother._id}
        resetViewFocus={null}
        viewRole='gen3-box4'
      />
    );

    // SVG tags to draw connector lines between 'person' components.

    tags.push(getParentSvg());

    if (this.props.father)
      tags.push(getGrandparentSvg(
        !!this.props.fatherOfFather,
        !!this.props.motherOfFather,
        'g1'
      ));

    if (this.props.mother)
      tags.push(getGrandparentSvg(
        !!this.props.fatherOfMother,
        !!this.props.motherOfMother,
        'g2'
      ));

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
