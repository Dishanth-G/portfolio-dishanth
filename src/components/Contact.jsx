import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  return (
    <div className='h-screen '> 
      <div name='contact' className='bg-black h-full w-full text-white flex justify-around py-12 overflow-x-hidden mt-8'>
        <div className='pb-8 text-center mt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Coding Profile and Contact Info</p>
          <p className='text-gray-300 py-4'></p>
          <div className='flex justify-center items-center flex-wrap'>
            <div className='w-1/2 sm:w-1/3 md:w-1/5 p-2 text-center'>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href='mailto:gdishanthkavitha@gmail.com'><FaEnvelope size={30} /> </a>
                <a href='mailto:gdishanthkavitha@gmail.com'>Email</a>
              </div>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/5 p-2 text-center'>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href='https://www.linkedin.com/in/dishanthg/'><FaLinkedin size={30} /> </a>
                <a href='https://www.linkedin.com/in/dishanthg/'>LinkedIn</a>
              </div>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/5 p-2 text-center'>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href='https://github.com/Dishanth-G'> <FaGithub size={30} /></a>
                <a href='https://github.com/Dishanth-G'>Github</a>
              </div>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/5 p-2 text-center'>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href='https://www.hackerrank.com/Dishanth_G'><FaHackerrank size={30} /> </a>
                <a href='https://www.hackerrank.com/Dishanth_G'>HackerRank </a>
              </div>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/5 p-2 text-center'>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="https://leetcode.com/dishanth_g/"><SiLeetcode size={30} /> </a>
                <a href='https://leetcode.com/dishanth_g/'>LeetCode</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
