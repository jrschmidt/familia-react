import React, { Component } from 'react';
import './App.css';
import TreeDisplay4Gen from './TreeDisplay4Gen';
import { treeId, title as treeTitle, rootPersonId, persons } from './testData';

class App extends Component {

  constructor (props) {
    super(props);
    const rootPerson = persons.find( person => person._id === rootPersonId );
    const rootPersonName = `${rootPerson.firstname} ${rootPerson.surname}`;
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
          <h4>familia-react v3.1.3</h4>
        </header>
        <TreeDisplay4Gen
          people={this.state.people}
          rootPersonId={this.state.rootPersonId}
          rootPersonName={this.state.rootPersonName}
          />
      </div>
    );
  }

}

export default App;
