import React, { Component } from 'react';
import './ChildRow.css';

import PersonMini from './PersonMini.js';

class ChildRow extends Component {

  constructor (props) {
    super(props);
    this.state = {
      persons: [],
      connector: null
    }
  }

  static getDerivedStateFromProps (props, state) {
    return {
      persons: [],
      connector: <svg className="connect">S V G</svg>
    };
  }

  generateRowTags () {
    let person1, person2, person3;

    if (this.props.people.length === 1) {
      person1 = this.props.people.shift();
      return (
        <>
        <PersonMini person={person1} key={person1._id} role={this.props.leftRight === 'left' ? 'single-left' : 'single-right'} />
        </>
      );
    }

    else if (this.props.people.length === 2) {
      person1 = this.props.people.shift();
      person2 = this.props.people.shift();
      return (
        <>
        <PersonMini person={person1} key={person1._id} role={this.props.leftRight === 'left' ? 'child2' : 'child1'} />
        <PersonMini person={person2} key={person2._id} role={this.props.leftRight === 'left' ? 'child3' : 'child2'} />
        </>
      );
    }

    else if (this.props.people.length === 3) {
      person1 = this.props.people.shift();
      person2 = this.props.people.shift();
      person3 = this.props.people.shift();
      return (
        <>
        <PersonMini person={person1} key={person1._id} role='child1' />
        <PersonMini person={person2} key={person2._id} role='child2' />
        <PersonMini person={person3} key={person3._id} role='child3' />
        </>
      );
    }
  }

  render() {
    return (
      <div className="ChildRow">
      {this.generateRowTags()}
      {this.state.connector}
      </div>
    )
  }

}

export default ChildRow;
