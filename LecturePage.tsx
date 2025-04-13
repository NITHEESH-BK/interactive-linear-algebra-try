import React from 'react';
import { useParams } from 'react-router-dom';
import lectures from '../data/lectures.json';
import * as Components from '../components';

export default function LecturePage() {
  const { id } = useParams();
  const lecture = lectures.find(l => l.id === id);
  if (!lecture) return <p>Lecture not found</p>;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{lecture.title}</h1>
      <p className="mb-4">{lecture.description}</p>
      {lecture.components.map(name => {
        const Comp = (Components as any)[name];
        return Comp ? <Comp key={name} /> : null;
      })}
    </div>
  );
}