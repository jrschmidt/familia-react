import React, { Component } from 'react';
import './PersonMini.css';

class PersonMini extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverActive: (this.props.resetViewFocus) ? 'no' : 'never'
    };
  }

  render () {
    console.log('PersonMini render()');
    const name = `${this.props.person.firstname} ${this.props.person.surname}`;
    console.log(`name = ${name}`);
    const classArray = ['PersonMini', this.props.viewRole];
    console.log(`hoverActive = ${this.state.hoverActive}`);
    if (this.state.hoverActive !== 'never') {
      const hoverClass = (this.state.hoverActive === 'no') ? 'selectable' : 'selectable-hover';
      console.log(`hoverClass = ${hoverClass}`);
      classArray.push(hoverClass);
    }
    const classString = classArray.join(' ');
    console.log(`classString = ${classString}`);

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
