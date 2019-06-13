import React, { Component } from 'react';
import './PersonMini.css';

class PersonMini extends Component {

  render () {
    return (
      <div className={'PersonMini ' + this.props.role}>
        <h4>{this.props.person.firstname} {this.props.person.surname}</h4>
        <p>b1917 d1997</p>
      </div>
    )
  }
}

export default PersonMini;
