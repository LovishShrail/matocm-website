import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/Home.css";
import AboutSection from "./AboutUs";
import FAQSection from "../components/Faq";
import QuerySection from "../components/QuerySection";
import AnimatedTitle from "../components/AnimatedTitle";
import Footer from "../components/Footer";

const Home = () => {
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  // const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.5, 0]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  useEffect(() => {
    const gradient = document.querySelector(".animated-background");
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
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              backgroundColor: `rgba(255, ${Math.random() * 255}, ${
                Math.random() * 255
              }, 0.8)`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
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
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        id="faq"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <FAQSection />
      </motion.div>

      <motion.div
        id="query"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <QuerySection />
      </motion.div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Home;
