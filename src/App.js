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

    this.setState( {
      rootPersonId: 'p01',

      people: [

          {
            _id: 'p01',
            surname: 'Green',
            firstname: 'Abby',
            father: 'p02',
            mother: 'p03',
            wife: 'p04',
            Children: ['p05', 'p06', 'p07', 'p08', 'p09', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15', 'p16']
          },

        {
          _id: 'p02',
          surname: 'Green',
          firstname: 'Babby'
        },

        {
          _id: 'p03',
          surname: 'Green',
          firstname: 'Crabby'
        },

        {
          _id: 'p04',
          surname: 'Green',
          firstname: 'Dabby'
        },

        {
          _id: 'p05',
          surname: 'Green',
          firstname: 'Ebby'
        },

        {
          _id: 'p06',
          surname: 'Green',
          firstname: 'Febby'
        },

        {
          _id: 'p07',
          surname: 'Green',
          firstname: 'Gabby'
        },

        {
          _id: 'p08',
          surname: 'Green',
          firstname: 'Habby'
        },

        {
          _id: 'p09',
          surname: 'Green',
          firstname: 'Ibby'
        },

        {
          _id: 'p10',
          surname: 'Green',
          firstname: 'Jibby'
        },

        {
          _id: 'p11',
          surname: 'Green',
          firstname: 'Kibby'
        },

        {
          _id: 'p12',
          surname: 'Green',
          firstname: 'Libby'
        },

        {
          _id: 'p13',
          surname: 'Green',

          firstname: 'Mobby'
        },

        {
          _id: 'p15',
          surname: 'Green',
          firstname: 'Nobby'
        },

        {
          _id: 'p16',
          surname: 'Green',
          firstname: 'Obby'
        }

      ]
    });

    // leftRight: 'right',
    // husband: props.people.find((person) => person._id === '5b0ef6074896a175634c115b'),
    // fatherMale: props.people.find((person) => person._id === '5b1048cba064560004bb6b6d'),
    // motherMale: props.people.find((person) => person._id === '5b0f02694896a175634c115c'),
    // focus: props.people.find((person) => person._id === '5b10442ea064560004bb6b6c'),

    // fetch('/persons')
    // .then( (response) => response.json() )
    // .then( (peopleData) => this.setState( {people: peopleData} ) );
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h4>familia-react v0.5.1</h4>
        </header>
        <TreeDisplay3Gen people={this.state.people} rootId={this.state.rootPersonId}/>
      </div>
    );
  }

}

export default App;
