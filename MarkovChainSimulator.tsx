import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export function MarkovChainSimulator() {
  const [matrix, setMatrix] = useState('[[0.5,0.5],[0.2,0.8]]');
  const [steps, setSteps] = useState<number[][]>([]);
  const simulate = () => {
    try {
      const P = JSON.parse(matrix) as number[][];
      let v = [1,0];
      const seq = [];
      for(let i=0;i<10;i++){ seq.push({step:i, s0:v[0], s1:v[1]}); v = P.map((row,i)=>row[0]*v[0]+row[1]*v[1]); }
      setSteps(seq);
    } catch { setSteps([]); }
  };
  return (
    <div className="p-4">
      <h3 className="font-bold">Markov Chain Simulator</h3>
      <textarea rows={3} value={matrix} onChange={e=>setMatrix(e.target.value)} className="w-full border" />
      <button onClick={simulate} className="mt-2 px-4 py-2 rounded shadow">Simulate</button>
      <LineChart width={300} height={200} data={steps} className="mt-4">
        <XAxis dataKey="step" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="s0" />
        <Line type="monotone" dataKey="s1" />
      </LineChart>
    </div>
  );
}