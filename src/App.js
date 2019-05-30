import React, { Component } from 'react';
import './App.css';
import TreeDisplay3Gen from './TreeDisplay3Gen';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      people: [],
      rootPersonId: '5b0ef6074896a175634c115b'
    };
  }

  async componentDidMount () {
    fetch('/persons')
    .then( (response) => response.json() )
    .then( (peopleData) => this.setState( {people: peopleData} ) )
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h4>familia-react v0.3.4</h4>
        </header>
        <TreeDisplay3Gen people={this.state.people} rootId={this.state.rootPersonId}/>
      </div>
    );
  }

}

export default App;
