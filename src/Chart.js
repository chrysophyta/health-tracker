import React, { Component } from 'react';
import * as d3 from 'd3';

// Use the margin convention practice
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = window.innerWidth - margin.left - margin.right; // Use the window's width
const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

class Chart extends Component {
  state = {
    weights: null,
    temps: null,
    // d3 helpers
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    lineGenerator: d3.line()
  };

  xAxis = d3
    .axisBottom()
    .scale(this.state.xScale)
    .tickFormat(d3.timeFormat('%x'));
  yAxisForTemp = d3
    .axisRight()
    .scale(this.state.yScale)
    .tickFormat(d => `${d}℃`);
  yAxisForWeight = d3
    .axisLeft()
    .scale(this.state.yScale)
    .tickFormat(d => d);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, lineGenerator } = prevState;

    const timeDomain = d3.extent(data, d => d.date);
    const graphMax = 40;
    xScale.domain(timeDomain);
    yScale.domain([0, graphMax]);

    lineGenerator.x(d => xScale(d.date));
    lineGenerator.y(d => yScale(d.temp));
    const temps = lineGenerator(data);

    lineGenerator.y(d => yScale(d.weight));
    const weights = lineGenerator(data);
    // An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number

    return { weights, temps };
  }
  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxisForTemp).call(this.yAxisForTemp);
    d3.select(this.refs.yAxisForWeight).call(this.yAxisForWeight);
  }
  render() {
    return (
      <div className="Chart">
        <svg width={width} height={height}>
          <path d={this.state.temps} fill="none" stroke={'#000000'} />
          <path d={this.state.weights} fill="none" stroke={'blue'} />
          <g>
            <g ref="xAxis" />
            <g ref="yAxisForTemp" />
            <g ref="yAxisForWeight" transform={`translate(${width},0)`} />
          </g>
        </svg>
      </div>
    );
  }
}

export default Chart;
