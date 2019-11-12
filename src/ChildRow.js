import React, { Component } from 'react';
import './ChildRow.css';
import PersonMini from './PersonMini.js';
import PersonMiniAdd from './PersonMiniAdd.js';
import { getSiblingsSvg } from './treeDisplaySvgs.js';

class ChildRow extends Component {

  generateRowTags() {
    if ( this.props.people.length === this.props.viewRoleTags.length ) {
      const tags = [];
      const people = Array.from(this.props.people);
      const viewRoleTags = Array.from(this.props.viewRoleTags);
      while (viewRoleTags.length > 0) {
        let person = people.shift();
        let key = person._id;
        let tag = viewRoleTags.shift();
        tags.push( (person._id === 'child-add')
          ? <PersonMiniAdd
              key='add-child'
              addPerson={this.props.addPerson}
              originPerson={this.props.focusPerson}
              connect='add-top'
              viewRole={tag}
              label='child'
            />
          : <PersonMini
              person={person}
              key={key}
              selectable={true}
              resetViewFocus={this.props.resetViewFocus}
              setConnectorHighlight={null}
              viewRole={tag}
            />
        );
      }
      tags.push(getSiblingsSvg(this.props.rowType));
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
