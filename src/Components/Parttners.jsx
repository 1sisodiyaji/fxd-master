import React from 'react';
import NotClickabbleData from '../DataFiles/NotClickeabbleData';
import CompanyImages from '../Images/OIP.jpeg';

function Parttners() {
    return (
        <>

            <div className='bg-black pt-10'>

                <div className='bg-black  border-t   text-center pt-2 md:pt-8 '>
                    <h1 className='text-3xl md:text-6xl font-extrabold ' style={{color: '#ff00a6'}}>Industries Transformed</h1>

                    <h1 className='text-white text-3xl  font-extrabold '>by Our Digital Experties.</h1>
                </div>
            </div>


 {/* NotClickabbleData  Images */}
 <div className="flex flex-wrap justify-center bg-black gap-2 md:gap-12 pt-10 pb-4 md:pb-12">
        {NotClickabbleData.map((image) => (
          <div key={image.id} className=" overflow-hidden border rounded-xl h-24 md:w-44 md:h-32 pt-4  bg-slate-200 ">
            <img src={image.src} alt={image.name} className="w-28 md:w-full h-auto" />
          </div>
        ))}
      </div>



      {/* Our Circle */}

      <div>
 <div className='bg-slate-200 pt-12 pb-12'>
    <h1 className='text-red-500 text-4xl md:text-6xl text-center md font-extrabold  ml-8'>Our <span className='text-black'>Clientele</span></h1>

    <h2 className='text-black text-2xl font-semibold text-center  ml-8 mt-4'>Who we've served</h2>

 </div>
 <div  className='w-full h-96  '>
    <img src={CompanyImages} alt="partnersImages"  className='w-full md:w-full md:h-96 h-auto'/>
 </div>

      </div>



        </>
    )
}

export default Parttners