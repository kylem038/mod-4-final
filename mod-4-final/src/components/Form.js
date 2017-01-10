import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      motivation: '',
      forgiven: false
    };
  }

  updateProperties(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="FormWrapper">
        <form className="Form">
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
            className='motivation-input'
            name='motivation'
            placeholder='Why do you despise this person?'
            type='text'
            aria-label='Why you despise said person'
            value={this.state.motivation}
            onChange={(e) => this.updateProperties(e)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
