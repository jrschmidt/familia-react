import React, { Component } from 'react';
import './TreeDisplay.css';

import Breadcrumbs from './Breadcrumbs';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

class TreeDisplay extends Component {

  constructor (props) {
    super(props);
    this.resetViewFocus = this.resetViewFocus.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.renderCount = 0;

    this.state = {
      people: Array.from(props.people),
      peopleChanged: [],
      peopleAdded: [],
      viewState: {},
      path: {
        ids: [this.props.rootPersonId],
        names: [this.props.rootPersonName]
      },
    };

    const focusPerson = this.findPersonById(this.props.rootPersonId);
    this.state.viewState = this.getViewState(focusPerson);
  }

  // (For better readability, bound functions to pass down to other components
  //  are located after the render() funcion.)

  findPersonById (id) {
    return this.state.people.find( person => person._id === id ) || null;
  }

  updatePath (newPerson) {
    let ids = this.state.path.ids;
    let names = ids.map( id => {
      const person = this.findPersonById(id);
      return `${person.firstname} ${person.surname}`;
    });

    if (ids[ids.length - 2] === newPerson._id) {
      ids.pop();
      names.pop();
    }
    else {
      ids.push(newPerson._id);
      names.push(`${newPerson.firstname} ${newPerson.surname}`);
    }
    return {
      ids: ids,
      names: names
    };
  }

  getViewState (focusPerson) {
    const viewGender = focusPerson.gender;
    const husband = focusPerson && focusPerson.husband ? this.findPersonById( focusPerson.husband ) : null;
    const wife = focusPerson && focusPerson.wife ? this.findPersonById( focusPerson.wife ) : null;
    const male = viewGender === 'male' ? focusPerson : husband;
    const female = viewGender === 'female' ? focusPerson : wife;
    let father, fatherOfFather, motherOfFather;
    let mother, fatherOfMother, motherOfMother;

    if (viewGender === 'male') {
      father = male.father ? this.findPersonById( male.father ) : null;
      if (father) {
        fatherOfFather = father.father ? this.findPersonById( father.father ) : null;
        motherOfFather = father.mother ? this.findPersonById( father.mother ) : null;
      }
      mother = male.mother ? this.findPersonById( male.mother ) : null;
      if (mother) {
        fatherOfMother = mother.father ? this.findPersonById( mother.father ) : null;
        motherOfMother = mother.mother ? this.findPersonById( mother.mother ) : null;
      }
    }

    else {
      father = female.father ? this.findPersonById( female.father ) : null;
      if (father) {
        fatherOfFather = father.father ? this.findPersonById( father.father ) : null;
        motherOfFather = father.mother ? this.findPersonById( father.mother ) : null;
      }
      mother = female.mother ? this.findPersonById( female.mother ) : null;
      if (mother) {
        fatherOfMother = mother.father ? this.findPersonById( mother.father ) : null;
        motherOfMother = mother.mother ? this.findPersonById( mother.mother ) : null;
      }
    }

    return {
      focusPerson: focusPerson,
      husband: husband,
      wife: wife,
      father: father,
      fatherOfFather: fatherOfFather,
      motherOfFather: motherOfFather,
      mother: mother,
      fatherOfMother: fatherOfMother,
      motherOfMother: motherOfMother,
      children: focusPerson.children ? focusPerson.children.map( childId => this.findPersonById( childId )) : []
    };
  }

  newFatherMother (familyMember, role, person) {
    person.generation = familyMember.generation + 1;
    person.gender = (role === 'father') ? 'male' : 'female';
    person.children = [familyMember._id];
    familyMember[role] = person._id;
    return person;
  }

  newHusbandWife (familyMember, role, person) {
    person.generation = familyMember.generation;
    person.gender = (role === 'husband') ? 'male' : 'female';
    if (role === 'husband') familyMember.husband = person._id;
    if (role === 'wife') familyMember.wife = person._id;
    person.children = familyMember.children;
    return person;
  }

  newChild (familyMember, person) {
    person.generation = familyMember.generation - 1;
    const siblings = familyMember.children || [];
    familyMember.children = [...siblings, person._id];
    if (familyMember.husband) {
      const husband = this.findPersonById(familyMember.husband);
      husband.children = familyMember.children;
    }
    if (familyMember.wife) {
      const wife = this.findPersonById(familyMember.wife);
      wife.children = familyMember.children;
    }
    return person;
  }

  render() {
    const viewState = this.state.viewState;
    const tags =
      <>
      <Breadcrumbs
        names={this.state.path.names}
      />
      <TreeDisplayCore
        resetViewFocus={this.resetViewFocus}
        addPerson={this.addPerson}
        focusPerson={viewState.focusPerson}
        husband={viewState.husband}
        wife={viewState.wife}
        father={viewState.father}
        fatherOfFather={viewState.fatherOfFather}
        motherOfFather={viewState.motherOfFather}
        mother={viewState.mother}
        fatherOfMother={viewState.fatherOfMother}
        motherOfMother={viewState.motherOfMother}
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



  // Bound functions to pass down to other components


  // Bound function to pass down to PersonMini component:

  // This function changes the 'focus person' of the view to another person.
  resetViewFocus (focusId) {
    const focusPerson = this.findPersonById(focusId);
    this.setState({
      viewState: this.getViewState(focusPerson),
      path: this.updatePath(focusPerson)
    });
  }


  // Bound function to pass down to PersonMiniAdd component:

  // This function adds a new person. Currently it only adds the new person to
  // the state of the TreeDisplay component. Later we will add a commitChange()
  // function which can be passed down from the App component which can persist
  // the changes as desired, or merely log them as temporary local changes.
  // Invoking this function only changes the state of the TreeDisplay component.
  addPerson (familyMember, role, person) {
    if (!person._id) person._id =  Math.random().toString(36).slice(2,8);
    if (role === 'father' || role === 'mother')
      person = this.newFatherMother(familyMember, role, person);
    if (role === 'husband' || role === 'wife')
      person = this.newHusbandWife(familyMember, role, person);
    if (role === 'child')
      person = this.newChild(familyMember, person);

    if (!person.firstname) person.firstname = 'New';
    if (!person.surname) person.surname = 'Person';

    this.setState( (state, props) => {
      const ppeople = [...state.people, person];
      const ppeopleAdded = [...state.peopleAdded, person];
      return {
        people: ppeople,
        peopleAdded: ppeopleAdded,
        viewState: this.getViewState(person),
        path: this.updatePath(person)
      };
    });
  }

}

export default TreeDisplay;
