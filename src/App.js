import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Projects from './pages/Projects';
// import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import Loader from './components/Loader';
import OurDomains from './pages/OurDomains';
import Devinfo from './pages/DevInfo';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Correct usage since the Router is already in index.js

  useEffect(() => {
    // Prevent the loader for hash-based navigation like #about-us (on the Home page)
    if (location.pathname !== '#about-us' && !location.hash) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); // Simulate a delay
      return () => clearTimeout(timer);
    } else {
      // If the current route is About Us or there's a hash change (no full route change), don't show the loader
      setLoading(false);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/domains" element={<OurDomains />} />
            <Route path="/our-work" element={<Work />} />
            <Route path = "/dev-info" element = {<Devinfo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;