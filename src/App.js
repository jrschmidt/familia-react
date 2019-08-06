import React, { Component } from 'react';
import './App.css';
import TreeDisplay3Gen from './TreeDisplay3Gen';
import { treeId, title as treeTitle, rootPersonId, persons } from './testData';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      treeId: treeId,
      treeTitle: treeTitle,
      focusPersonId: rootPersonId,
      people: persons
    };

    // fetch('/persons')
    // .then( (response) => response.json() )
    // .then( (peopleData) => this.setState( {people: peopleData} ) );
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h4>familia-react v1.0.1</h4>
        </header>
        <TreeDisplay3Gen people={this.state.people} focusPersonId={this.state.focusPersonId}/>
      </div>
    );
  }

}

export default App;
