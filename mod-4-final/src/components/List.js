import React, { Component } from 'react';
import Grudge from './Grudge';
const axios = require('axios');

class List extends Component {
  constructor() {
    super();
    this.state = {
      grudges: []
    };
  }

  componentDidMount() {
    this.getGrudges();
  }

  getGrudges() {
    axios.get('/grudges')
      .then((data) => this.setState({ grudges: data.data }));
  }

  render() {
    let arrayOfGrudges = this.state.grudges;
    let numberUnforgiven = [];
    let numberForgiven = [];
    arrayOfGrudges.map((grudge) => {
      if (grudge.forgiven === false) { numberUnforgiven.push(grudge); }
      if (grudge.forgiven === true) { numberForgiven.push(grudge); }
    });
    let returnedGrudges = arrayOfGrudges.map((grudge) => {
      return <Grudge grudge={grudge} />
    });
    const grudges = returnedGrudges;
    return (
      <div className="ListWrapper">
        <p>Number of grudges: { arrayOfGrudges.length } </p>
        <p>Number unforgiven: { numberUnforgiven.length } </p>
        <p>Number forgiven: { numberForgiven.length } </p>
        {grudges}
      </div>
    );
  }
}

export default List;
