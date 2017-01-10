import React, { Component } from 'react';
import { Link } from 'react-router';

class Grudge extends Component {

  render() {
    return (
      <div className="Grudge">
        <Link to='/grudge' ><h3>{this.props.grudge.name}</h3></Link>
        <p>{this.props.grudge.offence}</p>
      </div>
    );
  }
}

export default Grudge;
