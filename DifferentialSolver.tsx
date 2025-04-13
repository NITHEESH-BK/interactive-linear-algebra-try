import React, { useState } from 'react';
import { derivative, simplify, exp } from 'mathjs';

export function DifferentialSolver() {
  const [a, setA] = useState('1');
  const solve = () => {};
  return (
    <div className="p-4">
      <h3 className="font-bold">ODE Solver x' = Ax</h3>
      <p>For scalar A: solution x(t) = e^{At}</p>
      <input value={a} onChange={e=>setA(e.target.value)} className="border p-1" />
      <p className="mt-2">x(t) = e^{ {a} t }</p>
    </div>
  );
}