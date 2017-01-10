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
    let returnedGrudges = arrayOfGrudges.map((grudge) => {
      return <Grudge grudge={grudge} />
    });
    const grudges = returnedGrudges;
    return (
      <div className="ListWrapper">
        {grudges}
      </div>
    );
  }
}

export default List;
