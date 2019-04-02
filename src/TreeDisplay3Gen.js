import React, { Component } from 'react';
import './TreeDisplay3Gen.css';
import PersonMini from './PersonMini.js';

class TreeDisplay3Gen extends Component {

  constructor () {
    super ();

    this.state = {

      people : [
        {
          id: 'F-1',
          surname: 'Anders',
          firstname: 'Michael'
        },

        {
          id: 'F-2',
          surname: 'Bishop',
          firstname: 'Ellen'
        },

        {
          id: 'F-3',
          surname: 'Anders',
          firstname: 'Thomas'
        },

        {
          id: 'F-4',
          surname: 'Miller',
          firstname: 'Joan'
        },

        {
          id: 'F-5',
          surname: 'Anders',
          firstname: 'Dennis'
        },

        {
          id: 'F-6',
          surname: 'Anders',
          firstname: 'Martha'
        }
      ]

  };

}

  render() {
    return (
      <div className="TreeDisplay3Gen">
        <h2>TreeDisplay3Gen Component</h2>
        <p>Sample Text for TreeDisplay3Gen Component</p>
        <ul>
          {this.state.people.map( (person, key) => <PersonMini person={person} key={person.id} /> )}
        </ul>
      </div>
    )
  }

}

export default TreeDisplay3Gen;
