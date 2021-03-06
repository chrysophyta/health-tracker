import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: {
        temp: '',
        weight: '',
        note: ''
      },
      newState: {}
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        newState: this.state.currentInput,
        currentInput: {
          temp: '',
          weight: '',
          note: ''
        }
      },
      function() {
        this.props.enterEntry(this.state.newState);
      }
    );
  };
  handleInput = (e, key) => {
    const timestamp = new Date().valueOf();
    const date = new Date().getDate;
    const newState = {
      ...this.state.currentInput,
      [key]:
        e.target.type === 'number'
          ? parseFloat(e.target.value)
          : e.target.value,
      timestamp: timestamp,
      date: date
    };
    this.setState({
      currentInput: newState
    });
  };
  render() {
    return (
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
    );
  }
}
export default Form;
