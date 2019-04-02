import React, { Component } from 'react';
import './App.css';
import TreeDisplay3Gen from './TreeDisplay3Gen';


class App extends Component {

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
      <div className="App">
        <header className="App-header">
          <h1>Familia-React</h1>
          <h2>React client for Familia genealogy API</h2>
          <h5>familia-react v0.1.6</h5>
        </header>
        <TreeDisplay3Gen people={this.state.people}/>
      </div>
    );
  }

}


export default App;
