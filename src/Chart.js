import React, { Component } from 'react';
import * as d3 from 'd3';

// Use the margin convention practice
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = window.innerWidth - margin.left - margin.right; // Use the window's width
const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

class Chart extends Component {
  state = {
    weights: null,
    temps: null
  };

  n = this.props.data.length;
  xScale = d3.scaleLinear().range([0, width]); // output

  // Y scale will use the randomly generate number
  yScale = d3.scaleLinear().range([height, 0]); // output

  lineGenerator = d3.line();

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (!data) return;

    const timeDomain = d3.extent(data, (d, i) => i);
    const tempMax = d3.max(data, d => d.temp);
    this.xScale.domain(timeDomain);
    this.yScale.domain([0, tempMax]);

    this.lineGenerator.x((d, i) => this.xScale(i));
    this.lineGenerator.y(d => this.xScale(d.temp));
    const temps = this.lineGenerator(data);

    this.lineGenerator.y(d => this.yScale(d.weight));
    const weights = this.lineGenerator(data);
    // An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number

    this.setState({ weights, temps });
  }
  render() {
    console.log(this.state.temps);
    return (
      <div className="Chart">
        <svg width={width} height={height}>
          <path d={this.state.temps} fill="none" stroke={'#000000'} />
          <path d={this.state.weights} fill="none" stroke={'#000000'} />
        </svg>
      </div>
    );
  }
}

export default Chart;
