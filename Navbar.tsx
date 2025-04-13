import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">Linear Algebra</Link>
      <div className="space-x-4">
        <Link to="/lectures">Lectures</Link>
      </div>
    </nav>
  );
}