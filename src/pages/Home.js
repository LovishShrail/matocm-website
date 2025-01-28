import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Home.css';
import AboutSection from './AboutUs';
import FAQSection from '../components/Faq';
// import Png from '../assets/bg 3.png';
import QuerySection from '../components/QuerySection.js';
import AnimatedTitle from '../components/AnimatedTitle.js';
import Footer from '../components/Footer.js';
// import Hero from '../components/Hero.js';

const Home = () => {
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };




  useEffect(() => {
    const gradient = document.querySelector('.animated-background');
    let count = 0;
    const gradientAnimation = setInterval(() => {
      count++;
      gradient.style.backgroundSize = `${200 + count}% ${200 + count}%`;
    }, 100);

    return () => clearInterval(gradientAnimation);
  }, []);


  return (
    <div className="background-section">

       
      <div className="animated-background" />

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      <motion.div
        className="header-container"
        initial="hidden"
        animate="visible"
        style={{ y: backgroundY }}
      >


        <motion.div variants={fadeInUp}>
          <AnimatedTitle />
        </motion.div>
      </motion.div>

      <motion.div
        id="about-us"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        id="faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <FAQSection />
      </motion.div>

      <motion.div
        id="query"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <QuerySection />
      </motion.div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Footer/>
      </motion.footer>
    </div>
  );
};

export default Home;