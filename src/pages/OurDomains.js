import React from 'react'
import '../styles/OurDomains.css'
import HackerText from '../components/HackerText'
import Footer from '../components/Footer'
import RollingGallery from '../components/RollingGallery'
import WebD from '../assets/domains/WebDev.jpg'
import AI from '../assets/domains/aiml.jpeg'
import Blockchain from '../assets/domains/blockchain.jpg'
import Trading from '../assets/domains/trading.jpg'
import ARVR from '../assets/domains/arvr.jpg'
import AppD from '../assets/domains/appD.jpg'

const items = [
  {
    image: WebD,
    link: 'https://google.com/',
    title: 'WEB DEV',
    description: 'Craft dynamic, responsive websites.'
},
{
    image: AI,
    link: 'https://google.com/',
    title: ' AI/ML',
    description: 'Unlock the power of intelligent systems.'
},
{
    image: Blockchain,
    link: 'https://google.com/',
    title: 'BLOCKCHAIN',
    description: 'Build secure, decentralized solutions.'
},
{
    image: Trading,
    link: 'https://google.com/',
    title: 'TRADING',
    description: 'Master the art of financial markets.'
},
{
    image: ARVR,
    link: 'https://google.com/',
    title: 'AR/VR',
    description: 'Design immersive virtual experiences.'
},
{
    image: AppD,
    link: 'https://google.com/',
    title: 'APP DEV',
    description: 'Create high-performance mobile and web apps.'
}


];



const OurDomains = () => {
  return (
    <div className='Domain-section'>
      <div className="domain">
        <h2 className="year-heading" style={{
          background: "linear-gradient(-45deg, #ff69b4, #e890e8, #b19cd9,rgb(90, 27, 216), #8a2be2)",
          backgroundSize: "200% 200%",
          animation: "gradient 15s ease infinite",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}><HackerText text=" Domains " /></h2>
      </div>
      <div className="domain-gallery">
        <div style={{ height: '600px', position: 'relative' }}>
          <RollingGallery items={items} />
        </div>
      </div>


      <div className="footer">

        <Footer />

      </div>
    </div>
  )
}

export default OurDomains