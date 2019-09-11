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
    const focusFather = focusPerson && focusPerson.father ? this.findPersonById( focusPerson.father ) : null;
    const focusMother = focusPerson && focusPerson.mother ? this.findPersonById( focusPerson.mother ) : null;
    return {
      focusPerson: focusPerson,
      focusPersonGender: viewGender,
      father: focusFather,
      mother: focusMother,
      husband: focusPerson && focusPerson.husband ? this.findPersonById( focusPerson.husband ) : null,
      wife: focusPerson && focusPerson.wife ? this.findPersonById( focusPerson.wife ) : null,
      fatherOfFather: focusFather && focusFather.father ? this.findPersonById( focusFather.father ) : null,
      motherOfFather: focusFather && focusFather.mother ? this.findPersonById( focusFather.mother ) : null,
      fatherOfMother: focusMother && focusMother.father ? this.findPersonById( focusMother.father ) : null,
      motherOfMother: focusMother && focusMother.mother ? this.findPersonById( focusMother.mother ) : null,
      children: focusPerson.children ? focusPerson.children.map( childId => this.findPersonById( childId )) : null
    };
  }

  resetViewFocus (focusId) {
    this.setState(this.getViewState(focusId));
  }

  render() {
    const tag1 = `Root person: ${this.props.rootPersonName}`;
    const tag2 = `Focus person: ${this.state.focusPerson.firstname} ${this.state.focusPerson.surname}`;
    const tags =
      <>
      <TreeDisplayCore
        resetViewFocus={this.resetViewFocus}
        focusPerson={this.state.focusPerson}
        husband={this.state.husband}
        wife={this.state.wife}
        father={this.state.father}
        mother={this.state.mother}
        fatherOfFather={this.state.fatherOfFather}
        motherOfFather={this.state.motherOfFather}
        fatherOfMother={this.state.fatherOfMother}
        motherOfMother={this.state.motherOfMother}
      />
      <ChildView
        resetViewFocus={this.resetViewFocus}
        children={this.state.children}
      />
      </>

    return (
      <div className='TreeDisplay4Gen'>
        {tags}
      </div>
    )
  }

}

export default TreeDisplay4Gen;
