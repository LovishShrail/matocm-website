import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Home.css';
import AboutSection from './AboutUs';
import FAQSection from '../components/Faq';
// import Png from '../assets/bg 3.png';
import QuerySection from '../components/QuerySection.js';
import AnimatedTitle from '../components/AnimatedTitle.js';

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

  // const gradientAnimation = {
  //   background: "linear-gradient(-45deg, #ff69b4, #e890e8, #b19cd9, #9370db, #8a2be2)",
  //   backgroundSize: "200% 200%",
  //   animation: "gradient 15s ease infinite",
  //   WebkitBackgroundClip: "text",
  //   WebkitTextFillColor: "transparent",
  //   backgroundClip: "text"
  // };


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
        {/* <motion.div className="team-title" variants={fadeInUp}>
          <div className="matcom" style={gradientAnimation}>
            Team MATCOM
          </div>
          <motion.div className="nit-hamirpur" variants={fadeInUp} transition={{ delay: 0.2 }}>
            NIT Hamirpur
          </motion.div>
          <motion.div className="description" variants={fadeInUp} transition={{ delay: 0.4 }}>
            A technical initiative associated with The Department of Mathematics and Scientific Computing
          </motion.div>
        </motion.div>

        <motion.div
          className="image-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={Png} alt="png-image" />
        </motion.div> */}


        <motion.div variants={fadeInUp}>
          <AnimatedTitle />
        </motion.div>
      </motion.div>

      <motion.div
        id="about-us"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
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
        <div className='footer-content1'>
          © MATCOM | NIMBUS 2025
        </div>
        <div className='footer-content2'>
          Designed by MATCOM ❤️
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;