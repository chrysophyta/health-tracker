import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: {
        temp: '',
        weight: ''
      },
      data: [
        // { temp: 10, weight: 20 },
        // { temp: 10, weight: 20 },
        // { temp: 10, weight: 20 },
        // { temp: 10, weight: 20 },
        // { temp: 10, weight: 20 }
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
  handleInput = (e, key) => {
    const newState = {
      ...this.state.currentInput,
      [key]: parseFloat(e.target.value),
      date: new Date()
    };
    this.setState({
      currentInput: newState
    });
  };
  render() {
    console.log(this.state.data, this.state.currentInput);
    return (
      <div className="App">
        <Chart data={this.state.data} />
        <form onSubmit={this.handleSubmit}>
          <input
            className="temp"
            type="number"
            value={this.state.currentInput.currentTemp}
            onChange={e => this.handleInput(e, 'temp')}
          />
          <input
            className="weight"
            type="number"
            value={this.state.currentInput.currentWeight}
            onChange={e => this.handleInput(e, 'weight')}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
