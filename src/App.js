import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './pages/Home';
import Team from './pages/Team';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router> 
      <div>
        <Navbar /> {/* Render the Navbar component */}
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/team" element={<Team />} />
        
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;