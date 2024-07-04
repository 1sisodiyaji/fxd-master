import React from 'react';
import ContectForm from './ContectForm';

function Contect() {
    return (
        <>
            <div className='  md:flex md:justify-around'>
                <div>
                <h1 className='text-5xl ml-10 pt-20 font-bold' style={{color: '#ff00a6'}}>Let's Talk</h1>

                <h2 className='text-xl mt-8 ml-10 font-bold '>
                    Let our team of experts lead the <br /> way. Whether you have <br />questions, need information, or <br /> want to discuss your next  <br />Website building &  marketing project, <br /> feel free to reach out to us.
                </h2>


                <h3 className='text-lg font-bold mt-8 ml-10'>
                    Call us ☎️
                </h3>
                <h3 className='text-lg font-bold mt-1 ml-10'>+6370303882</h3>

                <h3 className='text-lg font-bold mt-8 ml-10'>
                    Email Us 📮

                </h3>
                <h2 className='text-2xl font-bold mt-1 ml-10 pb-4'> <a href="mailto:contact@fxdteam@gmail.com">contact@fxdteam.com</a></h2>
                </div>
                <div>
                <ContectForm/>
                </div>
               
            </div>
        </>
    )
}

export default Contect