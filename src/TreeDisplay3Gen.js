import React, { Component } from 'react';
import './TreeDisplay3Gen.css';

import TreeDisplayHeader from './TreeDisplayHeader';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

class TreeDisplay3Gen extends Component {

  constructor (props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.state = this.getViewState(this.props.focusPersonId);
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
      children: focusPerson.children.map( childId => this.findPersonById( childId ))
    };
  }

  sendMessage (msg) {
    this.setState(this.getViewState(msg));
  }

  render() {
    const tags =
      <>
      <TreeDisplayHeader />
      <TreeDisplayCore
        xmit={this.sendMessage}
        focusPerson={this.state.focusPerson}
        husband={this.state.husband}
        wife={this.state.wife}
        fatherOfMale={this.state.fatherOfMale}
        motherOfMale={this.state.motherOfMale}
        fatherOfFemale={this.state.fatherOfFemale}
        motherOfFemale={this.state.motherOfFemale}
      />
      <ChildView
        xmit={this.sendMessage}
        children={this.state.children}
      />
      </>

    return (
      <div className="TreeDisplay3Gen">
        {tags}
      </div>
    )
  }

}

export default TreeDisplay3Gen;
