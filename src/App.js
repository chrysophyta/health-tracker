import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // { temp: 10, weight: 20 },
        // { temp: 10, weight: 20 },
        // { temp: 10, weight: 20 },
        // { temp: 10, weight: 20 },
        // { temp: 10, weight: 20 }
      ]
    };
  }
  addEntry = entry => {
    console.log(entry);
    this.setState({
      data: [...this.state.data, entry]
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Chart data={this.state.data} />
        <Form enterEntry={this.addEntry} />
      </div>
    );
  }
}

export default App;
