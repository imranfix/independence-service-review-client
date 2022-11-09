import React from 'react';
import about1 from '../../../Assets/about-img/about1.webp'
import about2 from '../../../Assets/about-img/about2.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen my-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <div className='relative w-1/2'>
        <img src={about1} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
        <img src={about2} alt='' className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
        </div>

          <div className='w-1/2'>
          <p className=' text-2xl text-orange-600'>About Us</p>
            <h1 className="text-5xl my-5 font-bold">We are skilled &  experience in this sector</h1>
            <p className="py-6"> There are many variations of visa who want to got aborad but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;