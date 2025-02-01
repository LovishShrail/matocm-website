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
  const location = useLocation(); 

  useEffect(() => {
    
    if (location.pathname !== '#about-us' && !location.hash) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); 
      return () => clearTimeout(timer);
    } else {
    
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