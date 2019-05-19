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

  async componentDidMount () {
    fetch('/persons')
    .then( (response) => response.json() )
    .then( (peopleData) =>  this.setState( {people: peopleData} ) )
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Familia-React</h1>
          <h2>React client for Familia genealogy API</h2>
          <h5>familia-react v0.2.3</h5>
        </header>
        <TreeDisplay3Gen people={this.state.people}/>
      </div>
    );
  }

}

export default App;
