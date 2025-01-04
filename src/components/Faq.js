import React, { useState } from 'react';
import '../styles/Faq.css';

const FaqCard = ({ number, question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>

            <div className={`faq-card ${isExpanded ? 'expanded' : ''}`}>
                <div className={`faq-header ${isExpanded ? 'expanded' : ''}`}>
                    <div className="faq-title">
                        <span className="faq-number">{number}</span>
                        <h2>{question}</h2>
                    </div>
                    <button
                        className="toggle-button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-expanded={isExpanded}
                        aria-controls="faq-content"
                    >
                        {isExpanded ? '-' : '+'}
                    </button>
                </div>
                <div
                    id="faq-content"
                    className="faq-content"
                    aria-hidden={!isExpanded}
                >
                    <p>{answer}</p>
                </div>
            </div>
        </>
    );

};

const FAQSection = () => {
    const faqData = [
        {
            number: "01",
            question: "What is MATCOM?",
            answer: "Our club was started with the intention of forming a group of like-minded people who are passionate about discovering the immense possibilities of mathematics and scientific computing. We work hard to create a culture of innovation, cooperation, and creativity that motivates our team members to push the limits of human understanding and achieve ground-breaking discoveries."
        },
        {
            number: "02",
            question: "What we do?",
            answer: "Our club focuses on the core mathematics related fields including Machine Learning, a subset of Artificial Intelligence, financial mathematics and research. We also promote the culture for overall development including web development,android development and 3D modelling."
        },
        {
            number: "03",
            question: "Who can join us?",
            answer: "Anyone can join and be a member of the team if their objectives match our interests."
        },
        {
            number: "04",
            question: "How to contact us?",
            answer: (
                <>
                    You can contact us via Email by <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">Clicking Here</a> or reach out on our Instagram by <a href="https://www.instagram.com/matcom_nith?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Clicking Here</a>.
                </>
            )
        }
    ];

    return (
        <>
            <div className="faq-section">
                <div className='faq-heading'>
                    <h2 >Frequently Asked Questions</h2>

                </div>
                {faqData.map((faq) => (
                    <FaqCard
                        key={faq.number}
                        number={faq.number}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </>
    );
};



export default FAQSection;



