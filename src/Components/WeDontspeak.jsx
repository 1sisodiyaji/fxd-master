import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ClickableImages from '../DataFiles/Clickeabledata';

function WeDontSpeak() {
  return (
    <>
      <div className='text-center bg-slate-200 pt-8'>
        <h1 className='text-4xl  md:text-6xl font-bold' style={{color: '#ff00a6'}}>We don't Speak;</h1>
        <h1 className='text-4xl font-bold text-black'>Our Work does</h1>
      </div>
      
      <div className='bg-slate-200 md:text-center md:pt-4'>
        <p className='ml-16 md:ml-0 text-md pt-2'>Dive into our showcase of past triumphs,<br /></p>
        <span className='text-black font-bold text-start ml-6 md:ml-0 text-lg'>a testament to our commitment to excellence</span>
      </div>
      
      {/* Clickable Images Carousel number One */}
      <div className="bg-slate-200 p-4 pb-4 ">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay showStatus={false} >
          {ClickableImages.map((image) => (
            <div key={image.id} className="p-2 md:w-1/2  md:ml-96">
              <img src={image.src} alt={image.name} className="w-full h-auto" />
            </div>
          ))}
        </Carousel>
      </div>
       {/* Clickable Images Carousel number two */}
       {/* <div className="bg-slate-200 p-4 pt-20 md:pt-44 md:pb-12">
       <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay showStatus={false} >
          {ClickableImages.map((image) => (
            <div key={image.id} className="p-2 md:w-1/2  md:ml-96">
              <img src={image.src} alt={image.name} className="w-full h-auto" />
            </div>
          ))}
        </Carousel>
      </div> */}
    </>
  );
}

export default WeDontSpeak;
