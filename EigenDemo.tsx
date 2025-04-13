import React, { useState } from 'react';
import { eigs } from 'mathjs';
import MathJax from 'react-mathjax';

export function EigenDemo() {
  const [matrix, setMatrix] = useState('[[2,1],[1,2]]');
  const [result, setResult] = useState<{values:number[], vectors:number[][]} | null>(null);
  const compute = () => {
    try {
      const m = JSON.parse(matrix);
      const {values, vectors} = eigs(m as number[][]) as any;
      setResult({values, vectors});
    } catch { setResult(null); }
  };
  return (
    <div className="p-4">
      <h3 className="font-bold">Eigenvalues & Vectors</h3>
      <textarea rows={3} value={matrix} onChange={e=>setMatrix(e.target.value)} className="w-full border" />
      <button onClick={compute} className="mt-2 px-4 py-2 rounded shadow">Compute</button>
      {result && <MathJax.Provider>
        <div className="mt-2">
          <p>Eigenvalues: <MathJax.Node formula={`[${result.values.map(v=>v.toFixed(2)).join(', ')}]`} /></p>
        </div>
      </MathJax.Provider>}
    </div>
  );
}