import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: {
        temp: '',
        weight: ''
      },
      data: [
        { temp: 10, weight: 20 },
        { temp: 10, weight: 20 },
        { temp: 10, weight: 20 }
      ]
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      data: [...this.state.data, this.state.currentInput],
      currentInput: {
        temp: '',
        weight: ''
      }
    });
  };
  handleTempInput = e => {
    this.setState({
      currentInput: { ...this.state.currentInput, temp: e.target.value }
    });
  };
  handleWeightInput = e => {
    this.setState({
      currentInput: { ...this.state.currentInput, weight: e.target.value }
    });
  };
  render() {
    console.log(this.state.data, this.state.currentInput);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            className="temp"
            value={this.state.currentInput.currentTemp}
            onChange={this.handleTempInput}
          />
          <input
            className="weight"
            value={this.state.currentInput.currentWeight}
            onChange={this.handleWeightInput}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
