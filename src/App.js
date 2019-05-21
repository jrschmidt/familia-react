import React, { Component } from 'react';
import './App.css';
import TreeDisplay3Gen from './TreeDisplay3Gen';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      people: []
    };
  }

setDisplayProps (peopleData) {
  peopleData.forEach( (person) => {
    if (person._id === '5b0ef6074896a175634c115b') {
      person.role = 'focus';
    }
    if (person._id === '5b0f02694896a175634c115c') {
      person.role = 'mother';
    }
    if (person._id === '5b0f0cc44896a175634c115d') {
      person.role = 'child';
    }
    if (person._id === '5b10442ea064560004bb6b6c') {
      person.role = 'wife';
    }
    if (person._id === '5b1048cba064560004bb6b6d') {
      person.role = 'father';
    }
  });
  return peopleData;
}

  async componentDidMount () {
    fetch('/persons')
    .then( (response) => response.json() )
    .then( (peopleData) =>  peopleData = this.setDisplayProps(peopleData) )
    .then( (peopleData) =>  this.setState( {people: peopleData} ) )
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Familia-React</h2>
          <h3>React client for Familia genealogy API</h3>
          <h5>familia-react v0.2.7</h5>
        </header>
        <TreeDisplay3Gen people={this.state.people}/>
      </div>
    );
  }

}

export default App;
