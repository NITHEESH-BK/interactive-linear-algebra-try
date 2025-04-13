import React from 'react';
import { Link } from 'react-router-dom';

export default function LectureCard({ id, title, description }: { id: string; title: string; description: string }) {
  return (
    <Link to={`/lectures/${id}`}>
      <div className="border rounded p-4 hover:shadow-lg transition">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}