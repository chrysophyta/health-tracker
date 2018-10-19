import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: {
        temp: '',
        weight: '',
        note: ''
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
        weight: '',
        note: ''
      }
    });
  };
  handleInput = (e, key) => {
    console.log(e.target.type);
    const date = new Date().valueOf();
    const newState = {
      ...this.state.currentInput,
      [key]:
        e.target.type === 'number'
          ? parseFloat(e.target.value)
          : e.target.value,
      date: date
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
            value={this.state.currentInput.temp}
            onChange={e => this.handleInput(e, 'temp')}
          />
          <input
            className="weight"
            type="number"
            value={this.state.currentInput.weight}
            onChange={e => this.handleInput(e, 'weight')}
          />
          <input
            className="note"
            type="text"
            value={this.state.currentInput.note}
            onChange={e => this.handleInput(e, 'note')}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
