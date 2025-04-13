import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white shadow p-4 text-center">
      &copy; {new Date().getFullYear()} Interactive Linear Algebra
    </footer>
  );
}