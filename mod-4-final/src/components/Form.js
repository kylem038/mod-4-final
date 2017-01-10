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

  render() {
    return (
      <div className="FormWrapper">
        <form className="Form">
          <input
            className='grudge-name-input'
            placeholder='Name of your grudge'
            type='text'
            aria-label='Name of your grudge'
            value={this.state.name}
          />
          <textarea
            className='motivation-input'
            placeholder='Why do you despise this person?'
            type='text'
            aria-label='Why you despise said person'
            value={this.state.motivation}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
