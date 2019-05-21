import React, { Component } from 'react';

class PersonDisplayTile extends Component {

  render () {
    return (
      <div>
        <h3>PersonDisplayTile Component</h3>
        <p>{this.props.person.firstname} {this.props.person.surname}</p>
      </div>
    )
  }
}

export default PersonDisplayTile;
