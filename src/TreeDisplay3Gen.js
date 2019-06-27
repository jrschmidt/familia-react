import React, { Component } from 'react';
import './TreeDisplay3Gen.css';
import TreeDisplayCore from './TreeDisplayCore';
import ChildView from './ChildView';

import TreeDisplayHeader from './TreeDisplayHeader';

class TreeDisplay3Gen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      readyToDisplay: 'no',
      leftRight: '',
      focus: {},
      fatherMale: null,
      motherMale: null,
      husband: null,
      wife: null,
      children: []
    }
  }

  static getDerivedStateFromProps (props, state) {
    return {
      leftRight: 'right',
      husband: props.people.find((person) => person._id === '5b0ef6074896a175634c115b'),
      fatherMale: props.people.find((person) => person._id === '5b1048cba064560004bb6b6d'),
      motherMale: props.people.find((person) => person._id === '5b0f02694896a175634c115c'),
      focus: props.people.find((person) => person._id === '5b10442ea064560004bb6b6c'),

      fatherFemale: {
        _id: 'p88',
        surname: 'Lewis',
        firstname: 'Charles'
      },

      motherFemale: {
        _id: 'p87',
        surname: 'Bennett',
        firstname: 'Darla'
      },

      children: [
        {
          _id: 'p01',
          surname: 'Green',
          firstname: 'Abby'
        },

        // {
        //   _id: 'p02',
        //   surname: 'Green',
        //   firstname: 'Babby'
        // },
        //
        // {
        //   _id: 'p03',
        //   surname: 'Green',
        //   firstname: 'Crabby'
        // },
        //
        // {
        //   _id: 'p04',
        //   surname: 'Green',
        //   firstname: 'Dabby'
        // },
        //
        // {
        //   _id: 'p05',
        //   surname: 'Green',
        //   firstname: 'Ebby'
        // },
        //
        // {
        //   _id: 'p06',
        //   surname: 'Green',
        //   firstname: 'Febby'
        // },
        //
        // {
        //   _id: 'p07',
        //   surname: 'Green',
        //   firstname: 'Gabby'
        // },

        // {
        //   _id: 'p08',
        //   surname: 'Green',
        //   firstname: 'Habby'
        // },

        // {
        //   _id: 'p09',
        //   surname: 'Green',
        //   firstname: 'Ibby'
        // },

        // {
        //   _id: 'p10',
        //   surname: 'Green',
        //   firstname: 'Jibby'
        // },

        // {
        //   _id: 'p11',
        //   surname: 'Green',
        //   firstname: 'Kibby'
        // },

        // {
        //   _id: 'p12',
        //   surname: 'Green',
        //   firstname: 'Libby'
        // },
        //
        // {
        //   _id: 'p13',
        //   surname: 'Green',
        //   firstname: 'Mobby'
        // },
        //
        // {
        //   _id: 'p15',
        //   surname: 'Green',
        //   firstname: 'Nobby'
        // },
        //
        // {
        //   _id: 'p16',
        //   surname: 'Green',
        //   firstname: 'Obby'
        // },

      ]
    };
  }

  render() {
    let list = this.state.focus ?
    <>
    <TreeDisplayHeader />
    <TreeDisplayCore
      leftRight={this.state.leftRight}
      focus={this.state.focus}
      fatherMale={this.state.fatherMale}
      motherMale={this.state.motherMale}
      fatherFemale={this.state.fatherFemale}
      motherFemale={this.state.motherFemale}
      husband={this.state.husband}
      wife={this.state.wife}
    />
    <ChildView children={this.state.children} />
    </>
    :
    'empty list';

    return (
      <div className="TreeDisplay3Gen">
        {list}
      </div>
    )
  }

}

export default TreeDisplay3Gen;
