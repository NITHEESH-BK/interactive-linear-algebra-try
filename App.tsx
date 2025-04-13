import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LectureListPage from './pages/LectureListPage';
import LecturePage from './pages/LecturePage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lectures" element={<LectureListPage />} />
          <Route path="/lectures/:id" element={<LecturePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}