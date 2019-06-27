import React, { Component } from 'react';
import './ChildRow.css';
import PersonMini from './PersonMini.js';

class ChildRow extends Component {

  svgs = {

    svgSingle1:
      <svg className='connect' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgSingle2:
      <svg className='connect' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='500' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgSingle3:
      <svg className='connect' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='200' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='200' y1='40' x2='200' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='400' y1='40' x2='400' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgFinal1:
      <svg className='connect' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgFinal2:
      <svg className='connect' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgFinal3:
      <svg className='connect' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='500' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgFinal4:
      <svg className='connect' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='700' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='700' y1='40' x2='700' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    svgExtend4:
      <svg className='connect' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='160' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='700' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='700' y1='40' x2='700' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

  };

  generateRowTags () {
    let person1, person2, person3, person4;

    if (this.props.people.length === 1) {
      person1 = this.props.people.shift();
      return (
        <>
          <PersonMini person={person1} key={person1._id} viewRole='child-middle' />
          {this.svgs.svgSingle1}
        </>
      );
    }

    else if (this.props.people.length === 2) {
      person1 = this.props.people.shift();
      person2 = this.props.people.shift();
      return (
        <>
          <PersonMini person={person1} key={person1._id} viewRole='child-2' />
          <PersonMini person={person2} key={person2._id} viewRole='child-3' />
          {this.svgs.svgSingle2}
        </>
      );
    }

    else if (this.props.people.length === 3) {
      person1 = this.props.people.shift();
      person2 = this.props.people.shift();
      person3 = this.props.people.shift();
      return (
        <>
          <PersonMini person={person1} key={person1._id} viewRole='child-left' />
          <PersonMini person={person2} key={person2._id} viewRole='child-middle' />
          <PersonMini person={person3} key={person3._id} viewRole='child-right' />
          {this.svgs.svgSingle3}
        </>
      );
    }

    else if (this.props.people.length === 4) {
      person1 = this.props.people.shift();
      person2 = this.props.people.shift();
      person3 = this.props.people.shift();
      person4 = this.props.people.shift();
      return (
        <>
          <PersonMini person={person1} key={person1._id} viewRole='child-1' />
          <PersonMini person={person2} key={person2._id} viewRole='child-2' />
          <PersonMini person={person3} key={person3._id} viewRole='child-3' />
          <PersonMini person={person4} key={person4._id} viewRole='child-4' />
          {this.props.extend === 'true' ? this.svgs.svgExtend4 : this.svgs.svgFinal4}
        </>
      );
    }
  }

  render() {
    return (
      <div className='ChildRow'>
      </div>
    )
  }

}

export default ChildRow;
