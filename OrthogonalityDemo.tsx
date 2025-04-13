import React, { useState } from 'react';

export function OrthogonalityDemo() {
  const [angle, setAngle] = useState(45);
  const rad = (angle*Math.PI)/180;
  const v1 = [1,0];
  const v2 = [Math.cos(rad), Math.sin(rad)];
  const dot = v1[0]*v2[0]+v1[1]*v2[1];
  return (
    <div className="p-4">
      <h3 className="font-bold">Orthogonality Demo</h3>
      <input type="range" min="0" max="180" value={angle} onChange={e=>setAngle(+e.target.value)} />
      <p>Angle: {angle}°</p>
      <p>Dot Product: {dot.toFixed(2)}</p>
      <div className="relative w-40 h-40 border">
        <svg width="160" height="160">
          <line x1="80" y1="80" x2={80+v1[0]*60} y2={80-v1[1]*60} stroke="blue" />
          <line x1="80" y1="80" x2={80+v2[0]*60} y2={80-v2[1]*60} stroke="red" />
        </svg>
      </div>
    </div>
  );
}