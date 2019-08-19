import React, { Component } from 'react';
import './App.css';
import TreeDisplay3Gen from './TreeDisplay3Gen';
import { treeId, title as treeTitle, rootPersonId, persons } from './testData';

class App extends Component {

  constructor (props) {
    super(props);
    const rootPerson = persons.find( person => person._id === rootPersonId );
    const rootPersonName = `$(rootPerson.firstname) $(rootPerson.surname)`;
    this.state = {
      treeId: treeId,
      treeTitle: treeTitle,
      rootPersonId: rootPersonId,
      people: persons,
      rootPersonName: rootPersonName
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
        <TreeDisplay3Gen people={this.state.people} rootPersonId={this.state.rootPersonId}/>
      </div>
    );
  }

}

export default App;
