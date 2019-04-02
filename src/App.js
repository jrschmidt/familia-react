import React, { Component } from 'react';
import './App.css';
import TreeDisplay3Gen from './TreeDisplay3Gen';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Familia-React</h1>
          <h2>React client for Familia genealogy API</h2>
          <h5>familia-react v0.1.4</h5>
        </header>
        <TreeDisplay3Gen/>
      </div>
    );
  }
}

export default App;
