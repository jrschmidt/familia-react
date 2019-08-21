import React, { Component } from 'react';
import './PersonMini.css';

class PersonMini extends Component {

  render () {
    const name = `${this.props.person.firstname} ${this.props.person.surname}`;
    return (
      <div className={'PersonMini ' + this.props.viewRole}>
        { this.props.resetViewFocus ?
          <span onClick={() => this.props.resetViewFocus(this.props.person._id)} >{name}</span> :
          <span>{name}</span>
        }
        <p>b1917 d1997</p>
      </div>
    )
  }
}

export default PersonMini;
