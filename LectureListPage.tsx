import React from 'react';
import lectures from '../data/lectures.json';
import LectureCard from '../components/LectureCard';

export default function LectureListPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {lectures.map(l => <LectureCard key={l.id} id={l.id} title={l.title} description={l.description} />)}
    </div>
  );
}