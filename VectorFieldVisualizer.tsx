import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export function VectorFieldVisualizer() {
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    const width = 300, height = 300;
    const xScale = d3.scaleLinear().domain([-2,2]).range([0,width]);
    const yScale = d3.scaleLinear().domain([-2,2]).range([height,0]);
    const points = d3.range(-2,2,0.5).flatMap(x=>d3.range(-2,2,0.5).map(y=>[x,y]));
    svg.attr('width',width).attr('height',height);
    svg.selectAll('line').data(points).enter().append('line')
      .attr('x1',d=>xScale(d[0])).attr('y1',d=>yScale(d[1]))
      .attr('x2',d=>xScale(d[0]-d[1])).attr('y2',d=>yScale(d[1]+d[0]))
      .attr('stroke','black');
  },[]);
  return <div><h3 className="font-bold">Vector Field</h3><svg ref={svgRef}></svg></div>;
}