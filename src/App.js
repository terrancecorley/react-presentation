import React, { Component } from 'react';
import JSX from './JSX';
import Button from './Button';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>test</h1>
        <JSX />
        <Button text="helllooooo" color="blue" backgroundColor="yellow"/>
      </div>
    );
  }
}

export default App;
