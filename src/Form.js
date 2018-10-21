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
    this.props.enterEntry(this.state.newState);
    this.setState({
      newState: this.state.currentInput,
      currentInput: {
        temp: '',
        weight: '',
        note: ''
      }
    });
  };
  handleInput = (e, key) => {
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
