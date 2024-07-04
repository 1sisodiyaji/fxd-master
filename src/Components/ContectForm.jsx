import React, { useState } from 'react';

function Contect() {
    const [showForm, setShowForm] = useState(true);

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        business: '',
        budget: '',
        service: 'App Development',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Form data submitted successfully:', responseData);

            // Reset the form
            setFormData({
                name: '',
                number: '',
                email: '',
                business: '',
                budget: '',
                service: 'App Development',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (show error message, retry logic, etc.)
        }
    };
    const crosshandle = () => {
        setShowForm(!showForm);

        setFormData(!formData);

    }



    return (
        <div className={`text-white  p-10 md:p-0 md:w-96 ${showForm ? 'block' : 'hidden'}`}>

            <form onSubmit={handleSubmit} className='space-y-6  rounded-lg pb-4 md:mt-1 md:mb-1' style={{ backgroundColor: '#00bcff' }}>
                <div className='text-end pt-4 pr-4' onClick={crosshandle}><i class="fi fi-br-x" style={{ cursor: ' pointer' }}></i></div>
                <div className='ml-6 mr-6 pt-2 '>
                    <label className='block text-lg font-bold'>Your Name <span title='Please Enter Your Name' style={{ cursor: 'pointer' }}> 🙎</span> </label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name ...'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full p-2 mt-1 text-black rounded'
                    />
                </div>

                <div className='ml-6 mr-6 pt-2'>
                    <label className='block text-lg font-bold'>Your Number <span title='Please Enter Your Whatsapp Number So we will be in touch with you sir.' style={{ cursor: 'pointer' }}> ☎️</span></label>
                    <input
                        type='number'
                        name='number'
                        placeholder='Whatsapp Number ...'
                        value={formData.number}
                        onChange={handleChange}
                        className='w-full p-2 mt-1 text-black rounded'
                    />
                </div>

                <div className='ml-6 mr-6 pt-2'>
                    <label className='block text-lg font-bold'>Your Email <span title='Please Enter Your Valid email ID' style={{ cursor: 'pointer' }}> ✉️</span></label>
                    <input
                        type='email'
                        name='email'
                        placeholder=' Email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full p-2 mt-1 text-black rounded'
                    />
                </div>

                <div className='ml-6 mr-6 pt-2'>
                    <label className='block text-lg font-bold'>Business <span title='Give information about your detailed business and website requirements.' style={{ cursor: 'pointer' }}> 🏭</span></label>
                    <input
                        type='text'
                        name='business'
                        placeholder='Tell Us What you need'
                        value={formData.business}
                        onChange={handleChange}
                        className='w-full p-2 mt-1 text-black rounded'
                    />
                </div>

                <div className='ml-6 mr-6 pt-2'>
                    <label className='block text-lg font-bold'>What is Your Budget? <span title='Please Enter Your Name' style={{ cursor: 'pointer' }}> 💸</span></label>
                    <input
                        type='number'
                        name='budget'
                        placeholder='₹'
                        value={formData.budget}
                        onChange={handleChange}
                        className='w-full p-2 mt-1 text-black rounded'
                    />
                </div>

                <div className='ml-6 mr-6 pt-2'>
                    <label className='block text-lg font-bold'>Service <span title='Please Enter Your Name' style={{ cursor: 'pointer' }}> 💻</span></label>
                    <select
                        name='service'
                        value={formData.service}
                        onChange={handleChange}
                        className='w-full p-2 mt-1 text-black rounded'
                    >
                        <option>App Development</option>
                        <option>Website Development</option>
                        <option>Digital Marketing</option>
                    </select>
                </div>

                <button
                    type='submit'
                    className='w-44   bg-green-600 text-white py-2 rounded hover:bg-red-700 transition duration-200 ml-20 md:ml-28 '
                >
                    Submit
                </button>
            </form>

        </div>
    );
}

export default Contect;
