import React, { Component } from 'react';
const axios = require('axios');

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      offence: '',
      forgiven: false
    };
  }

  updateProperties(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  postGrudge(e) {
    e.preventDefault();
    let data = { name: this.state.name, offence: this.state.offence };
    axios.post('/grudges', data)
      .then(() => console.log('request complete'))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="FormWrapper">
        <form className="Form" onSubmit={this.postGrudge.bind(this)}>
          <input
            className='grudge-name-input'
            name='name'
            placeholder='Name of your grudge'
            type='text'
            aria-label='Name of your grudge'
            value={this.state.name}
            onChange={(e) => this.updateProperties(e)}
          />
          <textarea
            className='offence-input'
            name='offence'
            placeholder='Why do you despise this person?'
            type='text'
            aria-label='Why you despise said person'
            value={this.state.offence}
            onChange={(e) => this.updateProperties(e)}
          />
          <button className='SubmitButton' type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
