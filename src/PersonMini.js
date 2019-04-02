import React, { Component } from 'react';

class PersonMini extends Component {
  render () {
    return (
      <div>
        <h4>PersonMini Component</h4>
        <p>{this.props.person.firstname} {this.props.person.surname}</p>
      </div>
    )
  }
}

export default PersonMini;
