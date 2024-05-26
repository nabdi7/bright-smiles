import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Home from './components/Home';
import Enroll from './components/Enroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}  />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
