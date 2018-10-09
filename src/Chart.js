import React, { Component } from 'react';
import * as d3 from 'd3';

class Chart extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart = () => {};
  componentWillReceiveProps(nextProps) {
    // Use the margin convention practice
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = window.innerWidth - margin.left - margin.right; // Use the window's width
    const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

    // n of datapoints
    var n = this.props.data.length;

    // X scale will use the index of our data
    var xScale = d3
      .scaleLinear()
      .domain([0, n - 1]) // input
      .range([0, width]); // output

    // Y scale will use the randomly generate number
    var yScale = d3
      .scaleLinear()
      .domain([0, 1]) // input
      .range([height, 0]); // output

    var line = d3
      .line()
      .x(function(d, i) {
        return xScale(i);
      }) // set the x values for the line generator
      .y(function(d) {
        return yScale(d.y);
      }) // set the y values for the line generator
      .curve(d3.curveMonotoneX); // apply smoothing to the line
    console.log(line);
    const dataline = line(nextProps.data);
    this.setState({ data: dataline });
    // An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    var dataset = d3.range(n).map(function(d) {
      return { y: d3.randomUniform(1)() };
    });
  }
  render() {
    return (
      <div className="Chart">
        <svg width={500} height={500} />
      </div>
    );
  }
}

export default Chart;
