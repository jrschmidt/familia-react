import React, { Component } from 'react';

class PersonMini extends Component {
  // Temporary method to manually add a 'role' property to a person
  manuallyAddPersonRole (person) {
    let year = person.birthdate.slice(0,4);
    let role;
    switch (year) {
      case '1957':
        role = 'focus';
      break;
      case '1934':
        role = 'father';
      break;
      case '1937':
        role = 'mother';
      break;
      case '1955':
        role = 'wife';
      break;
      default:
      role = 'child';
    }
    return role;
  }

  render () {
    this.props.person.role = this.manuallyAddPersonRole(this.props.person);
    return (
      <div>
        <h4>PersonMini Component</h4>
        <p>{this.props.person.firstname} {this.props.person.surname}</p>
        <h6>{this.props.person.role}</h6>
      </div>
    )
  }
}

export default PersonMini;
