import React, { Component } from 'react';

class Grudge extends Component {

  render() {
    return (
      <div className="Grudge">
        <h2>{this.props.grudge.name}</h2>
        <p>{this.props.grudge.offence}</p>
      </div>
    );
  }
}

export default Grudge;
