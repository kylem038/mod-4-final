import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Grudge Bin</h2>
        </div>
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
