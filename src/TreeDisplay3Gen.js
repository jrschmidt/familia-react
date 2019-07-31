import React, { Component } from 'react';
import './TreeDisplay3Gen.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

class TreeDisplay3Gen extends Component {

  constructor (props) {
    super(props);
    this.state = this.getViewState();
  }

  findPersonById (id) {
    return this.props.people.find( person => person._id === id );
  }

  getViewState () {
    const focusPerson = this.findPersonById( this.props.focusPersonId );
    const viewGender = focusPerson.gender;
    let male = viewGender === 'male' ? focusPerson : this.findPersonById( focusPerson.husband );
    let female = viewGender === 'female' ? focusPerson : this.findPersonById( focusPerson.wife );
    return {
      focusPerson: focusPerson,
      focusPersonGender: viewGender,
      fatherOfMale: this.findPersonById( male.father ),
      motherOfMale: this.findPersonById( male.mother ),
      fatherOfFemale: this.findPersonById( female.father ),
      motherOfFemale: this.findPersonById( female.mother ),
      husband: viewGender === 'female' ? male : null,
      wife: viewGender === 'male' ? female: null,
      children: focusPerson.children.map( childId => this.findPersonById( childId ))
    };
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
