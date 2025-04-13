import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MathJax from 'react-mathjax';
import { calculateRowEchelon } from '../utils/mathHelpers';

export function MatrixVisualizer() {
  const [matrix, setMatrix] = useState<number[][]>([[1,2,3],[4,5,6],[7,8,9]]);
  const [steps, setSteps] = useState<number[][][]>([]);

  const handleCompute = () => setSteps(calculateRowEchelon(matrix));

  return (
    <div className="p-4">
      <h3 className="font-bold">Gaussian Elimination</h3>
      <MathJax.Provider>
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          {steps.map((step, i) => (
            <div key={i} className="mb-2">
              <MathJax.Node formula={`\\begin{pmatrix}${step.map(r=>r.join(' & ')).join('\\\\')}\\end{pmatrix}`} />
            </div>
          ))}
        </motion.div>
      </MathJax.Provider>
      <button onClick={handleCompute} className="mt-2 px-4 py-2 rounded shadow">Compute</button>
    </div>
  );
}