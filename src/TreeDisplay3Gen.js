import React, { Component } from 'react';
import './TreeDisplay3Gen.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

class TreeDisplay3Gen extends Component {

  constructor (props) {
    super(props);
    const focusPerson = this.props.people.find( person => person._id === this.props.focusPersonId );
    const viewGender = focusPerson.gender;

    const spouse = viewGender === 'male' ?
    this.props.people.find( person => person._id === focusPerson.wife ) :
    this.props.people.find( person => person._id === focusPerson.husband );

    let male, female;
    if (viewGender === 'male')
      {
        male = focusPerson;
        female = spouse;
      }
    else
      {
        female = focusPerson;
        male = spouse;
      }

    this.state = {
      focusPerson: focusPerson,
      focusPersonGender: viewGender,
      fatherOfMale: this.props.people.find( person => person._id === male.father ),
      motherOfMale: this.props.people.find( person => person._id === male.mother ),
      fatherOfFemale: this.props.people.find( person => person._id === female.father ),
      motherOfFemale: this.props.people.find( person => person._id === female.mother ),
      husband: viewGender === 'male' ? null : spouse,
      wife: viewGender === 'female' ? null : spouse,
      children: focusPerson.children.map( childId =>  this.props.people.find( person => person._id === childId ))
    }
  }

  render() {
    const tags =
      <>
      <TreeDisplayHeader />
      <TreeDisplayCore
        focusPerson={this.state.focusPerson}
        husband={this.state.husband}
        wife={this.state.wife}
        fatherOfMale={this.state.fatherOfMale}
        motherOfMale={this.state.motherOfMale}
        fatherOfFemale={this.state.fatherOfFemale}
        motherOfFemale={this.state.motherOfFemale}
      />
      <ChildView children={this.state.children} />
      </>

    return (
      <div className="TreeDisplay3Gen">
        {tags}
      </div>
    )
  }

}

export default TreeDisplay3Gen;
