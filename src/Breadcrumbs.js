import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {

  render () {
    const crumbString = '  ' + this.props.names.join(' >> ');
    return (
      <div className="Breadcrumbs">
      <p>
        <span className='root-tag'>(root)</span>
        {crumbString}
      </p>
      </div>
    )
  }
}

export default Breadcrumbs;
