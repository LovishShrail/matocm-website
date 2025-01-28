import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import '../styles/QuerySection.css';

const QuerySection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="query-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h1
                className="query-title"
                variants={fadeInUp}
            >
                Have any Query
            </motion.h1>

            <motion.div
                className="query-content"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
            >

                <p className="query-text">
                    You can mail us on{' '}
                    <span className="mail-display">
                        matcom.nimbus@nith.ac.in
                    </span>
                </p>

                <p className="query-text">
                    or{' '}
                    <a
                        href="mailto:matcom.nimbus@nith.ac.in"
                        className="click-here"
                    >
                        Click Here
                    </a>
                </p>
            </motion.div>


            <motion.div
                className="social-links"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
            >
                <a
                    href="https://www.linkedin.com/company/matcom-nith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="https://www.instagram.com/matcom_nith?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <Instagram size={24} />
                </a>
                <a
                    href="https://github.com/team-matcom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <Github size={24} />
                </a>
                <a
                    href="mailto:matcom.nimbus@nith.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <Mail size={24} />
                </a>
            </motion.div>
        </motion.div>
    );
};

export default QuerySection;