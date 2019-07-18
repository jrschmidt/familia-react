import React, { Component } from 'react';
import './App.css';
import TreeDisplay3Gen from './TreeDisplay3Gen';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {

      focusPersonId: 'p02',

      people: [
        {
          _id: 'p01',
          gender: 'male',
          surname: 'Green',
          firstname: 'Andrew',
          father: 'p03',
          mother: 'p04',
          wife: 'p02',
          children: ['p07','p08','p09','p10', 'p11', 'p12', 'p13','p14', 'p15']
        },

        {
          _id: 'p02',
          gender: 'female',
          surname: 'Miller',
          firstname: 'Barbara',
          father: 'p05',
          mother: 'p06',
          husband: 'p01',
          children: ['p07','p08','p09','p10', 'p11', 'p12', 'p13','p14','p14']
        },

        {_id: 'p03', surname: 'Green', firstname: 'Charles'},
        {_id: 'p04', surname: 'Davis', firstname: 'Debby'},
        {_id: 'p05', surname: 'Miller', firstname: 'Edward'},
        {_id: 'p06', surname: 'Wilson', firstname: 'Flora'},
        {_id: 'p07', surname: 'Green', firstname: 'Gabby'},
        {_id: 'p08', surname: 'Green', firstname: 'Habby'},
        {_id: 'p09', surname: 'Green', firstname: 'Ibby'},
        {_id: 'p10', surname: 'Green', firstname: 'Jibby'},
        {_id: 'p11', surname: 'Green', firstname: 'Kibby'},
        {_id: 'p12', surname: 'Green', firstname: 'Libby'},
        {_id: 'p13', surname: 'Green', firstname: 'Mobby'},
        {_id: 'p14', surname: 'Green', firstname: 'Nobby'},
        {_id: 'p15', surname: 'Green', firstname: 'Obby'}

      ]
    };

    // fetch('/persons')
    // .then( (response) => response.json() )
    // .then( (peopleData) => this.setState( {people: peopleData} ) );
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h4>familia-react v0.7.0</h4>
        </header>
        <TreeDisplay3Gen people={this.state.people} focusPersonId={this.state.focusPersonId}/>
      </div>
    );
  }

}

export default App;
