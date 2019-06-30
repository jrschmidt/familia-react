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
      leftRight: '',
      focus: {},
      fatherMale: null,
      motherMale: null,
      husband: null,
      wife: null,
      children: []
    }
  }

  static getDerivedStateFromProps (props, state) {
    return {
    };
  }

  render() {
    let list = this.state.focus ?
    <>
    <TreeDisplayHeader />
    <TreeDisplayCore
      leftRight={this.state.leftRight}
      focus={this.state.focus}
      fatherMale={this.state.fatherMale}
      motherMale={this.state.motherMale}
      fatherFemale={this.state.fatherFemale}
      motherFemale={this.state.motherFemale}
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
