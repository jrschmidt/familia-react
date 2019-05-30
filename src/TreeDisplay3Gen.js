import React, { Component } from 'react';
import './TreeDisplay3Gen.css';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

import TreeDisplayHeader from './TreeDisplayHeader';

class TreeDisplay3Gen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      readyToDisplay: 'no',
      focus: {},
      father: null,
      mother: null,
      husband: null,
      wife: null,
      children: []
    }
  }

  static getDerivedStateFromProps (props, state) {
    return {
      focus: props.people.find((person) => person._id === '5b0ef6074896a175634c115b'),
      father: props.people.find((person) => person._id === '5b1048cba064560004bb6b6d'),
      mother: props.people.find((person) => person._id === '5b0f02694896a175634c115c'),
      wife: props.people.find((person) => person._id === '5b10442ea064560004bb6b6c'),
      children: [ props.people.find((person) => person._id === '5b0f0cc44896a175634c115d') ]
    };
  }

  render() {
    let list = this.state.focus ?
    <>
    <TreeDisplayHeader />
    <TreeDisplayCore
      focus={this.state.focus}
      father={this.state.father}
      mother={this.state.mother}
      husband={this.state.husband}
      wife={this.state.wife}
    />
    <ChildView children={this.state.children} />
    </>
    :
    'empty list';

    return (
      <div className="TreeDisplay3Gen">
        {list}
      </div>
    )
  }

}

export default TreeDisplay3Gen;
