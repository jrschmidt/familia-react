import React, { Component } from 'react';
import './App.css';
import getData from './dataService';
import TreeDisplay3Gen from './TreeDisplay3Gen';

class App extends Component {
  _isMounted = false;

  constructor (props) {
    super(props);
    this.state = {
      people: []
    };
  }

  async componentDidMount () {
    this._isMounted = true;
    const peopleData = await getData().people;
    if (this._isMounted) {
      this.setState( {people: peopleData} );
    }
  }

  componentWillUnmount () {
    this._isMounted = false;
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Familia-React</h1>
          <h2>React client for Familia genealogy API</h2>
          <h5>familia-react v0.1.8</h5>
        </header>
        <TreeDisplay3Gen people={this.state.people}/>
      </div>
    );
  }

}

export default App;
