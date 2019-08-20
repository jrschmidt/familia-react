import React, { Component } from 'react';
import './TreeDisplay4Gen.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

class TreeDisplay4Gen extends Component {

  constructor (props) {
    super(props);
    this.resetViewFocus = this.resetViewFocus.bind(this);
    this.state = this.getViewState(this.props.rootPersonId);
  }

  findPersonById (id) {
    return this.props.people.find( person => person._id === id );
  }

  getViewState (focusPersonId) {
    const focusPerson = this.findPersonById( focusPersonId );
    const viewGender = focusPerson.gender;
    const male = viewGender === 'male' ? focusPerson : this.findPersonById( focusPerson.husband );
    const female = viewGender === 'female' ? focusPerson : this.findPersonById( focusPerson.wife );
    return {
      focusPerson: focusPerson,
      focusPersonGender: viewGender,
      fatherOfMale: male && male.father ? this.findPersonById( male.father ) : null,
      motherOfMale: male && male.mother ? this.findPersonById( male.mother ) : null,
      fatherOfFemale: female && female.father ? this.findPersonById( female.father ) : null,
      motherOfFemale: female && female.mother ? this.findPersonById( female.mother ) : null,
      husband: viewGender === 'female' ? male : null,
      wife: viewGender === 'male' ? female: null,
      children: focusPerson.children ? focusPerson.children.map( childId => this.findPersonById( childId )) : null
    };
  }

  resetViewFocus (msg) {
    this.setState(this.getViewState(msg));
  }

  render() {
    const tag1 = `Root person: ${this.props.rootPersonName}`;
    const tag2 = `Focus person: ${this.state.focusPerson.firstname} ${this.state.focusPerson.surname}`;
    const tags =
      <>
      <TreeDisplayHeader
        headline='Family Tree Display'
        tagline1={tag1}
        tagline2={tag2}
        text='Click on a name to change focus person'
      />
      <TreeDisplayCore
        resetViewFocus={this.resetViewFocus}
        focusPerson={this.state.focusPerson}
        husband={this.state.husband}
        wife={this.state.wife}
        fatherOfMale={this.state.fatherOfMale}
        motherOfMale={this.state.motherOfMale}
        fatherOfFemale={this.state.fatherOfFemale}
        motherOfFemale={this.state.motherOfFemale}
      />
      <ChildView
        resetViewFocus={this.resetViewFocus}
        children={this.state.children}
      />
      </>

    return (
      <div className="TreeDisplay4Gen">
        {tags}
      </div>
    )
  }

}

export default TreeDisplay4Gen;
