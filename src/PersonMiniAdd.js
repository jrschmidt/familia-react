import React, { Component } from 'react';
import './PersonMiniAdd.css';

class PersonMiniAdd extends Component {

  render () {
    return (
      <div className={'PersonMiniAdd ' + this.props.viewRole}>
      <span>Add Person ...</span>
      </div>
    )
  }
}

export default PersonMiniAdd;
