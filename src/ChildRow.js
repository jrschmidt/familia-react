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
  // Lines to connect siblings to parents
  svgs = {

    svg1Left:
    <svg className='connect' width='720' height='160'>
      <line x1='480' y1='0' x2='480' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg1right:
    <svg className='connect' width='720' height='160'>
      <line x1='240' y1='0' x2='240' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg2Left:
    <svg className='connect' width='720' height='160'>
      <line x1='480' y1='0' x2='480' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='360' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='360' y1='40' x2='360' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg2LeftExtend:
    <svg className='connect' width='720' height='160'>
      <line x1='480' y1='0' x2='480' y2='160' stroke='#666666' strokeWidth='5' />
      <line x1='360' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='360' y1='40' x2='360' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg2Right:
    <svg className='connect' width='720' height='160'>
    <line x1='240' y1='0' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='120' y1='40' x2='360' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='120' y1='40' x2='120' y2='80' stroke='#666666' strokeWidth='5' />
    <line x1='360' y1='40' x2='360' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg2RightExtend:
    <svg className='connect' width='720' height='160'>
    <line x1='240' y1='0' x2='240' y2='160' stroke='#666666' strokeWidth='5' />
    <line x1='120' y1='40' x2='360' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='120' y1='40' x2='120' y2='80' stroke='#666666' strokeWidth='5' />
    <line x1='360' y1='40' x2='360' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg3Left:
    <svg className='connect' width='720' height='160'>
      <line x1='480' y1='0' x2='480' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='120' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='120' y1='40' x2='120' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='360' y1='40' x2='360' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg3LeftExtend:
    <svg className='connect' width='720' height='160'>
      <line x1='480' y1='0' x2='480' y2='160' stroke='#666666' strokeWidth='5' />
      <line x1='120' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='120' y1='40' x2='120' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='360' y1='40' x2='360' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg3Right:
    <svg className='connect' width='720' height='160'>
    <line x1='240' y1='0' x2='240' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='120' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='120' y1='40' x2='120' y2='80' stroke='#666666' strokeWidth='5' />
    <line x1='360' y1='40' x2='360' y2='80' stroke='#666666' strokeWidth='5' />
    <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

    svg3RightExtend:
    <svg className='connect' width='720' height='160'>
    <line x1='240' y1='0' x2='240' y2='160' stroke='#666666' strokeWidth='5' />
    <line x1='120' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='120' y1='40' x2='120' y2='80' stroke='#666666' strokeWidth='5' />
    <line x1='360' y1='40' x2='360' y2='80' stroke='#666666' strokeWidth='5' />
    <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>
  };

  static getDerivedStateFromProps (props, state) {
    return {
      persons: [],
    };
  }

  generateRowTags () {
    let person1, person2, person3;

    if (this.props.people.length === 1) {
      person1 = this.props.people.shift();
      return (
        <>
        <PersonMini person={person1} key={person1._id} role={this.props.leftRight === 'left' ? 'single-left' : 'single-right'} />
        {this.props.leftRight === 'left' ? this.svgs.svg1Left : this.svgs.svg1right}
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
        {this.props.leftRight === 'left' ?
          (this.props.extend === 'true' ? this.svgs.svg2LeftExtend : this.svgs.svg2Left) :
          (this.props.extend === 'true' ? this.svgs.svg2RightExtend : this.svgs.svg2Right) }
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
        {this.props.leftRight === 'left' ?
        (this.props.extend === 'true' ? this.svgs.svg3LeftExtend : this.svgs.svg3Left) :
        (this.props.extend === 'true' ? this.svgs.svg3RightExtend : this.svgs.svg3Right) }
        </>
      );
    }
  }

  render() {
    return (
      <div className='ChildRow'>
      {this.generateRowTags()}
      </div>
    )
  }

}

export default ChildRow;
