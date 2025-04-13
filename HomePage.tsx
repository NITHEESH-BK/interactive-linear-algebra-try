import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Interactive Linear Algebra</h1>
      <Link to="/lectures" className="px-6 py-3 bg-blue-500 text-white rounded">Start Learning</Link>
    </div>
  );
}