import React, { Component } from 'react';
import './PersonMini.css';

class PersonMini extends Component {

  render () {
    return (
      <div className={'PersonMini ' + this.props.viewRole}>
        <span>{this.props.person.firstname} {this.props.person.surname}</span>
        <p>b1917 d1997</p>
      </div>
    )
  }
}

export default PersonMini;
