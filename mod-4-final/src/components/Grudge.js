import React, { Component } from 'react';
import { Link } from 'react-router';

class Grudge extends Component {
  constructor(props) {
    super(props);
      this.state = {
        forgiven: this.props.grudge.forgiven
      };
    }

  toggleForgiveness() {
    if(this.props.grudge.forgiven === true) { this.setState({forgiven: false}); }
    if(this.props.grudge.forgiven === false) { this.setState({forgiven: true}); }
  }

  render() {
    return (
      <div className="Grudge">
        <Link to='/grudge' ><h3>{this.props.grudge.name}</h3></Link>
        <p>{this.props.grudge.offence}</p>
        <button
          type='submit'
          onClick={() => this.toggleForgiveness()}
        >Toggle forgiveness</button>
      </div>
    );
  }
}

export default Grudge;
