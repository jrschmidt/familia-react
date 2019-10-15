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

    this.state = {
      people: Array.from(props.people),
      peopleChanged: [],
      peopleAdded: [],
      viewState: {}
    };

    this.state.viewState = this.getViewState(this.props.rootPersonId);
  }

  findPersonById (id) {
    return this.state.people.find( person => person._id === id ) || null;
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
    this.setState( {viewState: this.getViewState(focusId)});
  }

  // Bound function to pass down to PersonMiniAdd component:

  // This function adds a new person. Currently it only adds the new person to
  // the state of the TreeDisplay component. Later we will add a commitChange()
  // function which can be passed down from the App component which can persist
  // the changes as desired, or merely log them as temporary local changes.
  // Invoking this function only changes the state of the TreeDisplay component.
  //
  addPerson (role, person) {
    this.state.people.push(person);
    this.state.peopleAdded.push(person);
  }

  render() {
    const viewState = this.state.viewState;
    const tag1 = `Root person: ${this.props.rootPersonName}`;
    const tag2 = `Focus person: ${viewState.focusPerson.firstname} ${viewState.focusPerson.surname}`;
    const tags =
      <>
      <TreeDisplayCore
        resetViewFocus={this.resetViewFocus}
        addPerson={this.addPerson}
        focusPerson={viewState.focusPerson}
        husband={viewState.husband}
        wife={viewState.wife}
        fatherOfMale={viewState.fatherOfMale}
        fatherOfFatherOfMale={viewState.fatherOfFatherOfMale}
        motherOfFatherOfMale={viewState.motherOfFatherOfMale}
        motherOfMale={viewState.motherOfMale}
        fatherOfMotherOfMale={viewState.fatherOfMotherOfMale}
        motherOfMotherOfMale={viewState.motherOfMotherOfMale}
        fatherOfFemale={viewState.fatherOfFemale}
        fatherOfFatherOfFemale={viewState.fatherOfFatherOfFemale}
        motherOfFatherOfFemale={viewState.motherOfFatherOfFemale}
        motherOfFemale={viewState.motherOfFemale}
        fatherOfMotherOfFemale={viewState.fatherOfMotherOfFemale}
        motherOfMotherOfFemale={viewState.motherOfMotherOfFemale}
      />
      <ChildView
        resetViewFocus={this.resetViewFocus}
        addPerson={this.addPerson}
        focusPerson={viewState.focusPerson}
        children={viewState.children}
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
