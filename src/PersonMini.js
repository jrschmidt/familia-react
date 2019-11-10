import React, { Component } from 'react';
import './PersonMini.css';

class PersonMini extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverActive: (this.props.selectable) ? 'no' : 'never'
    };
  }

  render () {
    const name = `${this.props.person.firstname} ${this.props.person.surname}`;

    let classString = `PersonMini ${this.props.viewRole}`;
    // if (this.props.selectable) classString += ' selectable';
    if (this.props.selectable) {
      classString +=
      (this.state.hoverActive === 'no')
      ? ' selectable'
      :' selectable-hover';
    }

    const mouseEnter =
      (this.state.hoverActive !== 'never')
      ? () => this.setState({hoverActive: 'active'})
      : null;

    const mouseLeave =
      (this.state.hoverActive !== 'never')
      ? () => this.setState({hoverActive: 'no'})
      : null;

    const reset = (this.props.resetViewFocus)
      ? () => this.props.resetViewFocus(this.props.person._id)
      : null;

    return (
      <div
        className={classString}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={reset}
      >
        <span>{name}</span>
        <p>b1917 d1997</p>
      </div>
    )
  }
}

export default PersonMini;
