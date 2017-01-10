import React, { Component } from 'react';

class Grudge extends Component {

  render() {
    return (
      <div className="Grudge">
        <h3>{this.props.grudge.name}</h3>
        <p>{this.props.grudge.offence}</p>
      </div>
    );
  }
}

export default Grudge;
