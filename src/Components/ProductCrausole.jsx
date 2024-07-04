import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ColoredLoremTextsCarousel() {
  return (
    //  each and every div It must be added minimum 50 words
    <div className="p-4 mt-10 md:mt-0 pb-4 flex justify-center items-center">
  <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
    {/* First section */}
    <div className="bg-black text-slate-200 p-4 rounded-lg text-xl w-80 md:w-2/3 md:h-96 h-auto mx-auto">
      <h1 className='border p-1 text-xl text-black font-bold bg-slate-50 mt-4 rounded-lg mb-8'>Performance Digital Marketing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae eaque odio, repellendus veritatis saepe et voluptates voluptatibus numquam voluptatem dolorum suscipit sint ratione necessitatibus modi inventore itaque ut ipsa praesentium facere mollitia incidunt magni officia sequi! Voluptates, at fugiat. Ex dicta aperiam molestias iusto quas earum quibusdam. Dolorem, ipsam.</p>
    </div>
    
    {/* Second section */}
    <div className="bg-black text-slate-200 p-4 rounded-lg text-xl w-80 md:w-2/3 md:h-96 h-auto mx-auto">
      <h1 className='border p-1 text-xl text-black font-bold bg-slate-50 mt-4 rounded-lg mb-8'>Performance Digital Marketing</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt asperiores necessitatibus reprehenderit voluptatibus? A accusamus repudiandae ipsum laboriosam voluptatem reprehenderit doloremque, totam ipsa neque obcaecati iusto? Incidunt harum iusto animi? Autem ut pariatur vitae officia minima corporis blanditiis, velit facilis eaque animi aliquam modi. Ullam quas odit unde molestiae ducimus.</p>
    </div>
    
    {/* Third section */}
    <div className="bg-black text-slate-200 p-4 rounded-lg text-xl w-80 md:w-2/3 md:h-96 h-auto mx-auto">
      <h1 className='border p-1 text-xl text-black font-bold bg-slate-50 mt-4 rounded-lg mb-8'>Performance Digital Marketing</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt asperiores necessitatibus reprehenderit voluptatibus? A accusamus repudiandae ipsum laboriosam voluptatem reprehenderit doloremque, totam ipsa neque obcaecati iusto? Incidunt harum iusto animi? Autem ut pariatur vitae officia minima corporis blanditiis, velit facilis eaque animi aliquam modi. Ullam quas odit unde molestiae ducimus.</p>
    </div>
    
    {/* Fourth section */}
    <div className="bg-black text-slate-200 p-4 rounded-lg text-xl w-80 md:w-2/3 md:h-96 h-auto mx-auto">
      <h1 className='border p-1 text-xl text-black font-bold bg-slate-50 mt-4 rounded-lg mb-8'>Performance Digital Marketing</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt asperiores necessitatibus reprehenderit voluptatibus? A accusamus repudiandae ipsum laboriosam voluptatem reprehenderit doloremque, totam ipsa neque obcaecati iusto? Incidunt harum iusto animi? Autem ut pariatur vitae officia minima corporis blanditiis, velit facilis eaque animi aliquam modi. Ullam quas odit unde molestiae ducimus.</p>
    </div>
  </Carousel>
</div>

  );
}

export default ColoredLoremTextsCarousel;
