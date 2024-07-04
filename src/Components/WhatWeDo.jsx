import React from 'react';
import { useState } from 'react';
import FirstImage from '../Images/6.png';
import ClickableData from '../DataFiles/Clickeabledata';
import thirdImage from '../Images/8.png';
import Cover from '../Images/graph.png'
import ContactForm from '../Components/ContectForm';

function WhatWeDo() {
  const [showForm,setShowForm]=useState(false);
  const toggleButton=()=>{
    setShowForm(!showForm);

  }
  return (
    <>
      <div>
        <div className={`text-center text-4xl font-bold mt-12 ${showForm ? 'blur' : ''}`}>
          <h1 className='text-slate-600'>What <span className="text-black">We Do!</span></h1>
        </div>

        <div className='md:flex md:flex-wrap md:justify-center md:mr-12 md:ml-12'>
          {[1, 2, 3].map((index) => (
            <div key={index} className='rounded-2xl border-2 mt-10 mb-4 ml-5 w-96 h-1/2 overflow-hidden '>
              <div className='h-48 bg-slate-500'>
                <img src={FirstImage} alt="DoImage" />

              </div>
              <div className=' bg-black pb-8 pt-8 '>
                <h1 className='ml-6 text-white text-3xl font-bold'>Building Brand with <br /> Creative Performance <br /> Marketing</h1>

                <h4 className='ml-6 mt-6 text-slate-400 text-lg font-bold'>Transform Your Brand through Social, <br /> Google, Meta, and YouTube Ads with <br /> Creative Performance Marketing</h4>

              </div>

            </div>
          ))}
        </div>
          <div  className='md:flex md:flex-wrap md:justify-center'>
            <div className=''>
        <div className='pb-2 md:mt-14'>
          <h1 className='ml-8  text-2xl md:text-4xl font-bold'><span style={{color: '#ff00a6'}}>Strategic Digital Marketing </span>to  <br />Engaging Social Media <br /> Management
          </h1>
          <h5 className='ml-8 mt-4 text-lg  text-slate-700'>From Strategic <b>Digital Marketing</b> to Engaging <br /><b> Social Media Management</b>, we drive your <br /> brand’s online success. Crafting impactful <br /> <b>campaigns</b> and managing your social <br /> presence, we bring your digital vision to life.</h5>
        </div>
        {/* Button Let's connect */}


        <div className='bg-black w-40 h-12 text-center rounded-xl pt-3 ml-8 '>
          <h3 className='text-gray-100 text-lg' onClick={toggleButton}>Let's Connect</h3>
        </div>
        </div>

        <div className={`pt-4 flex relative mr-2 md:mt-12`}  style={{  backgroundImage: `url(${Cover})`,backgroundRepeat:'no-repeat' , background:'contain' }}>
          <img src={thirdImage} alt="sameImages" className='h-96 relative  z-10 md:w-full md:h-80 ' />
          <img src={thirdImage} alt="sameImages" className=' h-72  md:w-full md:h-auto absolute top-28 md:top-16 md:left-40 z-20  w-64' />
        </div>
        </div>
        {/* we craft */}

        <div className='text-center mt-12 md:mt-28 pb-4'>
          <h1 className='ml-6 text-black text-4xl md:text-6xl font-bold mb-4'> <span className='text-red-600'>"We craft websites <br />  </span> <span className=''>that stand out and drive <br /> success" </span></h1>

        </div>
        <h6 className='ml-8 md:text-start md:text-lg md:ml-36 md:mb-12 mb-4 text-xl '>From <b>Dynamic corporate Websites</b> to  cutting-edge  <b>E-commerce Solutions</b>, We specialize in creating  <b>Responsive websites  </b> with trendsetting designs.</h6>


       <div className={`flex gap-2 md:justify-center md:gap-4  flex-wrap ml-3 pb-4 md:pb-12 ${showForm ? 'hidden' : ''}`} >
        {ClickableData.map((image)=>(
          <div key={image.id} className="rounded-lg border p-1 w-32 md:w-1/4 md:h-auto overflow-hidden hover:cursor-pointer  shadow-lg">
          <img src={image.src} alt={image.name} className="w-full h-auto" />
         
        </div>
        ))}
       </div>





      </div>
      {showForm && (
        <div className='blur'>
          <ContactForm />
        </div>
      )}

    </>
  );
}

export default WhatWeDo;
