import React, { Component } from 'react';
import './PersonDisplayTile.css';

class PersonDisplayTile extends Component {

  render () {
    return (
      <div className="PersonDisplayTile">
        <p>{this.props.person.firstname} {this.props.person.surname}</p>
      </div>
    )
  }
}

export default PersonDisplayTile;
