import React, { Component } from 'react';
import './ChildRow.css';
import PersonMini from './PersonMini.js';

class ChildRow extends Component {

  svgs = {

    'single-1':
      <svg className='connect' key='svg-single-1' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    'single-2':
      <svg className='connect' key='svg-single-2' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='500' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    'single-3':
      <svg className='connect' key='svg-single-3' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='200' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='200' y1='40' x2='200' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='400' y1='40' x2='400' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    'final-1':
      <svg className='connect' key='svg-final-1' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    'final-2':
      <svg className='connect' key='svg-final-2' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    'final-3':
      <svg className='connect' key='svg-final-3' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='500' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    'final-4':
      <svg className='connect' key='svg-final-4' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='700' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='700' y1='40' x2='700' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>,

    'extend-4':
      <svg className='connect' key='svg-extend-4' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='160' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='700' y2='40' stroke='#666666' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='5' />
        <line x1='700' y1='40' x2='700' y2='80' stroke='#666666' strokeWidth='5' />
      </svg>

  };

  generateRowTags() {
    if ( this.props.people.length === this.props.viewRoleTags.length ) {
      const tags = [];
      const people = Array.from(this.props.people);
      const viewRoleTags = Array.from(this.props.viewRoleTags);
      while (viewRoleTags.length > 0) {
        let person = people.shift();
        let key = person._id;
        let tag = viewRoleTags.shift();
        tags.push( <PersonMini person={person} key={key} viewRole={tag} /> );
      }
      tags.push(this.svgs[this.props.rowType]);
      return tags;
    }
    else {
        return [];
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
