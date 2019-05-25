import React, { Component } from 'react';
import './PersonMini.css';

class PersonMini extends Component {

  render () {
    return (
      <div className={'PersonMini ' + this.props.person.role}>
        <h6>{this.props.person.role}</h6>
        <p>{this.props.person.firstname} {this.props.person.surname}</p>
        <h5>b1917 d1997</h5>
      </div>
    )
  }
}

export default PersonMini;
