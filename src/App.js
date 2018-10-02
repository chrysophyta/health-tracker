import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: {
        currentTemp: null,
        currentWeight: null
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
    this.setState({ data: [...this.state.data, this.state.currentInput] });
  };
  handleTempInput = e => {
    const { currentWeight } = this.state.currentInput;
    this.setState({
      currentInput: { ...currentWeight, currentTemp: e.target.value }
    });
  };
  handleWeightInput = e => {
    const { currentTemp } = this.state.currentInput;
    this.setState({
      currentInput: { ...currentTemp, currentWeight: e.target.value }
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
