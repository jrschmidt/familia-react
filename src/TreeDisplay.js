import React, { Component } from 'react';
import './TreeDisplay.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

class TreeDisplay extends Component {

  constructor (props) {
    super(props);
    this.resetViewFocus = this.resetViewFocus.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.state = this.getViewState(this.props.rootPersonId);
  }

  findPersonById (id) {
    return this.props.people.find( person => person._id === id );
  }

  getViewState (focusPersonId) {
    const focusPerson = this.findPersonById( focusPersonId );
    const viewGender = focusPerson.gender;
    const husband = focusPerson && focusPerson.husband ? this.findPersonById( focusPerson.husband ) : null;
    const wife = focusPerson && focusPerson.wife ? this.findPersonById( focusPerson.wife ) : null;
    const male = viewGender === 'male' ? focusPerson : husband;
    const female = viewGender === 'female' ? focusPerson : wife;
    let fatherOfMale, fatherOfFatherOfMale, motherOfFatherOfMale;
    let motherOfMale, fatherOfMotherOfMale, motherOfMotherOfMale;
    let fatherOfFemale, fatherOfFatherOfFemale, motherOfFatherOfFemale;
    let motherOfFemale, fatherOfMotherOfFemale, motherOfMotherOfFemale;

    if (male) {
      fatherOfMale = male.father ? this.findPersonById( male.father ) : null;
      if (fatherOfMale) {
        fatherOfFatherOfMale = fatherOfMale.father ? this.findPersonById( fatherOfMale.father ) : null;
        motherOfFatherOfMale = fatherOfMale.mother ? this.findPersonById( fatherOfMale.mother ) : null;
      }
      motherOfMale = male.mother ? this.findPersonById( male.mother ) : null;
      if (motherOfMale) {
        fatherOfMotherOfMale = motherOfMale.father ? this.findPersonById( motherOfMale.father ) : null;
        motherOfMotherOfMale = motherOfMale.mother ? this.findPersonById( motherOfMale.mother ) : null;
      }
    }

    if (female) {
      fatherOfFemale = female.father ? this.findPersonById( female.father ) : null;
      if (fatherOfFemale) {
        fatherOfFatherOfFemale = fatherOfFemale.father ? this.findPersonById( fatherOfFemale.father ) : null;
        motherOfFatherOfFemale = fatherOfFemale.mother ? this.findPersonById( fatherOfFemale.mother ) : null;
      }
      motherOfFemale = female.mother ? this.findPersonById( female.mother ) : null;
      if (motherOfFemale) {
        fatherOfMotherOfFemale = motherOfFemale.father ? this.findPersonById( motherOfFemale.father ) : null;
        motherOfMotherOfFemale = motherOfFemale.mother ? this.findPersonById( motherOfFemale.mother ) : null;
      }
    }

    return {
      focusPerson: focusPerson,
      focusPersonGender: viewGender,
      husband: husband,
      wife: wife,
      fatherOfMale: fatherOfMale,
      fatherOfFatherOfMale: fatherOfFatherOfMale,
      motherOfFatherOfMale: motherOfFatherOfMale,
      motherOfMale: motherOfMale,
      fatherOfMotherOfMale: fatherOfMotherOfMale,
      motherOfMotherOfMale: motherOfMotherOfMale,
      fatherOfFemale: fatherOfFemale,
      fatherOfFatherOfFemale: fatherOfFatherOfFemale,
      motherOfFatherOfFemale: motherOfFatherOfFemale,
      motherOfFemale: motherOfFemale,
      fatherOfMotherOfFemale: fatherOfMotherOfFemale,
      motherOfMotherOfFemale: motherOfMotherOfFemale,
      children: focusPerson.children ? focusPerson.children.map( childId => this.findPersonById( childId )) : []
    };
  }

  // Bound function to pass down to PersonMini component:

  // This function changes the 'focus person' of the view to another person.
  resetViewFocus (focusId) {
    this.setState(this.getViewState(focusId));
  }

  // Bound function to pass down to PersonMiniAdd component:

  // This function adds a new person. Currently it only adds the new person to
  // the state of the TreeDisplay component. Later we will add a commitChange()
  // function which can be passed down from the App component which can persist
  // the changes as desired, or merely log them as temporary local changes.
  // Invoking this function only changes the state of the TreeDisplay component.
  // 
  addPerson (role, person) {
    console.log(`Attempting to add ${role} for ${person.firstname} ${person.surname}`);

    console.log(`Successfully added ${role} for ${person.firstname} ${person.surname}`);
  }

  render() {
    const tag1 = `Root person: ${this.props.rootPersonName}`;
    const tag2 = `Focus person: ${this.state.focusPerson.firstname} ${this.state.focusPerson.surname}`;
    const tags =
      <>
      <TreeDisplayCore
        resetViewFocus={this.resetViewFocus}
        addPerson={this.addPerson}
        focusPerson={this.state.focusPerson}
        husband={this.state.husband}
        wife={this.state.wife}
        fatherOfMale={this.state.fatherOfMale}
        fatherOfFatherOfMale={this.state.fatherOfFatherOfMale}
        motherOfFatherOfMale={this.state.motherOfFatherOfMale}
        motherOfMale={this.state.motherOfMale}
        fatherOfMotherOfMale={this.state.fatherOfMotherOfMale}
        motherOfMotherOfMale={this.state.motherOfMotherOfMale}
        fatherOfFemale={this.state.fatherOfFemale}
        fatherOfFatherOfFemale={this.state.fatherOfFatherOfFemale}
        motherOfFatherOfFemale={this.state.motherOfFatherOfFemale}
        motherOfFemale={this.state.motherOfFemale}
        fatherOfMotherOfFemale={this.state.fatherOfMotherOfFemale}
        motherOfMotherOfFemale={this.state.motherOfMotherOfFemale}
      />
      <ChildView
        resetViewFocus={this.resetViewFocus}
        addPerson={this.addPerson}
        focusPerson={this.state.focusPerson}
        children={this.state.children}
      />
      </>

    return (
      <div className='TreeDisplay'>
        {tags}
      </div>
    )
  }

}

export default TreeDisplay;
