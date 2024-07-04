import React, { useState, useEffect, useMemo } from 'react';
import Mobile from './Images/laptop.png';
import Laptop from './Images/mobile.png';
import Cover from  './Images/graph.png'

import DigitalDesign from './Components/DigitalDesign';
import WhatWeDo from './Components/WhatWeDo';
import WeDontspeak from './Components/WeDontspeak';
import Parttners from './Components/Parttners';
import ColoredLoremTextsCarousel from './Components/ProductCrausole';
import Contect from './Components/Contect';
import ContactForm from './Components/ContectForm';

function App() {
  const texts = useMemo(() => ["Website", "Ads", "Design"], []);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const typeIntervalId = setInterval(() => {
      setCurrentCharIndex((prevIndex) => {
        if (prevIndex < texts[currentTextIndex].length) {
          return prevIndex + 1;
        } else {
          clearInterval(typeIntervalId);
          return prevIndex;
        }
      });
    }, 300);

    return () => clearInterval(typeIntervalId);
  }, [currentCharIndex, currentTextIndex, texts]);

  useEffect(() => {
    const textIntervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentCharIndex(0);
    }, 3000);

    return () => clearInterval(textIntervalId);
  }, [texts.length]);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <>
      {showContactForm ? 
       <>
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <ContactForm />
        </div>
        </>

      :

      <div className={`bg-slate-100 w-full min-h-screen`}>
        <div className=' w-full h-auto'>

          {/* Navbar button and logo */}
          <div className='flex justify-between ml-2  md:ml-16'>
            <div className='flex gap-4'>
            <img src='https://fxdteam.com/wp-content/uploads/2024/05/fxdteam.com-logo-2.png' style={{height: '45px'}} alt='Logo' className='mt-4'></img>
            
            </div>

            <div className='w-28 h-8 text-center rounded-md pt-1 mr-12  md:mr-16 mt-6' style={{backgroundColor: '#ff00a6'}}>
              <h3 className='text-gray-100  text-md hover:cursor-pointer' onClick={toggleContactForm}>Let's Connect</h3>
            </div>
          </div>

          {/* Dynamic text */}

          <div  style={{  backgroundImage: `url(${Cover})`,backgroundRepeat:'no-repeat', height: '400px' ,
     }}>
          <div className='ml-4 md:ml-32 mt-16 md:mt-28'>
            <h6 className='font-semibold mt-4'>#Website-App-Developemnt_Agency</h6>
            <div className='flex gap-1  md:mt-1' >
              <h1 className='text-2xl md:text-7xl font-bold'>We</h1>
              <h1 className='text-2xl md:text-7xl font-bold'>Don't <span style={{color: '#ff00a6'}}>Create</span> </h1>
            </div>

            {/* Dynamic written text */}
            <div className='flex gap-1 md:mt-1'>
              <h1 className=' text-2xl md:text-7xl font-bold ' style={{color: '#ff00a6'}}>
                {texts[currentTextIndex].substring(0, currentCharIndex)}
                <span className='blinking-cursor'>|</span>
              </h1>
            </div>

            <div className='flex gap-1 md:mt-1  '>
              <h1 className='text-2xl md:text-7xl font-bold'>We Build</h1>
              <h1 className=' text-2xl md:text-7xl font-bold' style={{color: '#ff00a6'}}>Brands</h1>
            </div>
            <h6 className='font-semibold mr-4 md:mt-4 pb-28 '>Let's craft a brand identity that leaves your competitors in awe!</h6>
          </div>
          </div>
          {/* Laptop and mobile images */}
          <div className='relative w-full '>
            <img src={Mobile} alt='Mobile' className='h-28  lg:w-1/2 lg:h-96 transform -rotate-12 absolute -top-10  md:-top-36  md:left-60  z-10'></img>
            <img src={Laptop} alt='Laptop' className='w-64 lg:w-1/2 lg:h-auto transform -rotate-12 absolute left-32 md:left-1/3 md:ml-64 md:-top-96  -top-36 z-20'></img>
          </div>
        </div>

        <DigitalDesign />
        <WhatWeDo />
        <WeDontspeak />
        <Parttners />
        <ColoredLoremTextsCarousel />
        <Contect />
      </div>

      }
      

      {/* CSS for blinking cursor */}
      <style jsx>{`
        .blinking-cursor {
          font-weight: 700;
          font-size: 4xl;
          color: red;
          -webkit-animation: 1s blink step-end infinite;
          animation: 1s blink step-end infinite;
        }

        @keyframes blink {
          from, to {
            color: transparent;
          }
          50% {
            color: red;
          }
        }

        @-webkit-keyframes blink {
          from, to {
            color: transparent;
          }
          50% {
            color: red;
          }
        }

        .blur {
          filter: blur(5px);
        }
      `}</style>
    </>
  );
}

export default App;
