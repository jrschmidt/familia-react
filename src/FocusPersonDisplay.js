import React, { Component } from 'react';
import './FocusPersonDisplay.css';

class FocusPersonDisplay extends Component {

  render () {
    return (
      <div className={'FocusPersonDisplay ' + this.props.viewRole}>
        <h3>{this.props.person.firstname} {this.props.person.surname}</h3>
        <p><span>birth</span> {this.props.person.birthdate}</p>
        <p>{this.props.person.birthPlaceName}</p>
      </div>
    )
  }
}

export default FocusPersonDisplay;
