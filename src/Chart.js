import React, { Component } from 'react';
import * as d3 from 'd3';

class Chart extends Component {
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart = () => {
    const node = this.node;
    const dataMax = d3.max(this.props.data);
    const yScale = d3
      .scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove();

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d, i) => i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25);
  };
  render() {
    return (
      <div className="Chart">
        <svg ref={node => (this.node = node)} width={500} height={500} />
      </div>
    );
  }
}

export default Chart;
