import React, { Component } from 'react';
const axios = require('axios');

class List extends Component {
  constructor() {
    super();
    this.state = {
      grudges: []
    };
  }

  // componentDidMount() {
  //   axios.get('/grudges')
  //     .then((data) => console.log(data));
  // }

  render() {
    return (
      <div className="ListWrapper">

      </div>
    );
  }
}

export default List;
