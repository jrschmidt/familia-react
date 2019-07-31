import React, { Component } from 'react';
import './TreeDisplay3Gen.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

class TreeDisplay3Gen extends Component {

  constructor (props) {
    super(props);
    const focusPerson = this.findPersonById( this.props.focusPersonId );
    const viewGender = focusPerson.gender;

    const spouse = viewGender === 'male' ?
      this.findPersonById( focusPerson.wife ) :
      this.findPersonById( focusPerson.husband );

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
      fatherOfMale: this.findPersonById( male.father ),
      motherOfMale: this.findPersonById( male.mother ),
      fatherOfFemale: this.findPersonById( female.father ),
      motherOfFemale: this.findPersonById( female.mother ),
      husband: viewGender === 'male' ? null : spouse,
      wife: viewGender === 'female' ? null : spouse,
      children: focusPerson.children.map( childId => this.findPersonById( childId ))
    }
  }

  findPersonById (id) {
    return this.props.people.find( person => person._id === id );
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
