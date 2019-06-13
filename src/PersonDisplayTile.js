import React, { Component } from 'react';
import './PersonDisplayTile.css';

class PersonDisplayTile extends Component {

  render () {
    return (
      <div className={'PersonDisplayTile ' + this.props.role}>
        <h3>{this.props.person.firstname} {this.props.person.surname}</h3>
        <p><span>birth</span> {this.props.person.birthdate}</p>
        <p>{this.props.person.birthPlaceName}</p>
      </div>
    )
  }
}

export default PersonDisplayTile;
