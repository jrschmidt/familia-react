import React, { Component } from 'react';
import './TreeDisplayCore.css';

import FocusPersonDisplayTile from './FocusPersonDisplayTile.js';
import PersonMini from './PersonMini.js';
import PersonMiniAdd from './PersonMiniAdd.js';
import { getGrandparentSvg, getParentSvg, getChildrenSvg } from './treeDisplaySvgs.js';

class TreeDisplayCore extends Component {

  constructor (props) {
    super(props);
    this.setConnectorHighlight = this.setConnectorHighlight.bind(this);
    this.state = {
      connectHighlight: 'none'
    };
  }

  // Bound function to pass down to PersonMini component:

  // This function causes a different connctor SVG to be displayed by changing
  // the value of this.state.connectHighlight.

  setConnectorHighlight (highlight) {
    this.setState({ connectHighlight: highlight});
  }


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
          selectable={true}
          resetViewFocus={this.props.resetViewFocus}
          setConnectorHighlight={this.setConnectorHighlight}
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
          selectable={true}
          resetViewFocus={this.props.resetViewFocus}
          setConnectorHighlight={this.setConnectorHighlight}
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
          selectable={true}
          resetViewFocus={this.props.resetViewFocus}
          setConnectorHighlight={this.setConnectorHighlight}
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
          selectable={true}
          resetViewFocus={this.props.resetViewFocus}
          setConnectorHighlight={this.setConnectorHighlight}
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
        selectable={false}
        resetViewFocus={null}
        setConnectorHighlight={null}
        viewRole='gen3-box1'
      />
    );

    if (this.props.motherOfFather) tags.push(
      <PersonMini
        person={this.props.motherOfFather}
        key={this.props.motherOfFather._id}
        selectable={false}
        resetViewFocus={null}
        setConnectorHighlight={null}
        viewRole='gen3-box2'
      />
    );

    if (this.props.fatherOfMother) tags.push(
      <PersonMini
        person={this.props.fatherOfMother}
        key={this.props.fatherOfMother._id}
        selectable={false}
        resetViewFocus={null}
        setConnectorHighlight={null}
        viewRole='gen3-box3'
      />
    );

    if (this.props.motherOfMother) tags.push(
      <PersonMini
        person={this.props.motherOfMother}
        key={this.props.motherOfMother._id}
        selectable={false}
        resetViewFocus={null}
        setConnectorHighlight={null}
        viewRole='gen3-box4'
      />
    );

    // SVG tags to draw connector lines between 'person' components.

    tags.push(getParentSvg(this.state.connectHighlight));

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

    // // Connect to spouse and children of focus person:
    tags.push(getChildrenSvg(focusGender, this.state.connectHighlight));

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
