import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const crumbString = 'ROOT: ' + this.props.names.join(' >> ');
    return (
      <div className="Breadcrumbs">
      <p>{crumbString}</p>
      </div>
    )
  }
}

export default Breadcrumbs;
