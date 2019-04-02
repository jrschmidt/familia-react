import React, { Component } from 'react';
import './TreeDisplay3Gen.css';
import PersonMini from './PersonMini.js';

class TreeDisplay3Gen extends Component {

  render() {
    return (
      <div className="TreeDisplay3Gen">
        <h2>TreeDisplay3Gen Component</h2>
        <p>Sample Text for TreeDisplay3Gen Component</p>
        <ul>
          {this.props.people.map( (person, key) => <PersonMini person={person} key={person.id} /> )}
        </ul>
      </div>
    )
  }

}

export default TreeDisplay3Gen;
