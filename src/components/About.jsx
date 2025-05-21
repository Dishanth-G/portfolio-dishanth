import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import VITLogo from '../assets/VIT_Logo.png'
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#2d31a1' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-screen-xl  leading-[30px]'>👨‍💻 Hi, I'm Dishanth,         
            A highly motivated and passionate  <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/dishanthg/' target='_blank'>Full Stack Software developer</a>  with 2+ years of experience in product-based companies, excelling in NodeJS, React, AWS, Redux, SQL, and ElasticSearch. 
            <br /> <br />Successfully developed scalable features with record stable quality, mentored interns, and managed small teams, demonstrating leadership and collaborative abilities. Passionate about leveraging skills to drive business success and eager to connect with professionals and explore new opportunities.</p>
            
            
            {/* <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/dishanthg/' target='_blank'>Full Stack Software developer</a> 
              <br />
              ✍️ Beyond coding, I love sharing my insights and experiences through engaging blogs on <a className=' text-purple-300 hover:text-purple-400 duration-300' href="" target='_blank'>Medium</a>, where I delve into the intricacies of software development and technology trends.
              On a different note, I'm also into photography📸. It's not just a hobby; I see it as a way to capture moments🌟📷, tell stories.</p> */}

            <ButtonLink
              url='https://drive.google.com/file/d/1DGpZtJptBt2HUzkE_GJobu_neTfCrBww/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

<h2 className='text-4xl sm:text-5xl font-extrabold mt-5'>Education</h2>

        <img src={VITLogo} alt="VIT Logo" class="mt-5 mb-6"/>
        <h1 class=" text-2xl font-bold mb-2">VIT (Vellore Institute of Technology)</h1>
        <h2 class=" text-xl mb-4">B.Tech in Computer Science and Engineering</h2>
        <p class=" mb-2"><span class="font-semibold">2018 - 2022</span></p>
        <p class=" mb-4"><span class="font-semibold">CGPA:</span> 9.07 / 10</p>
        <h3 class=" text-lg font-semibold mb-2">Coursework:</h3>
        <ul class="list-disc list-inside space-y-1">
            <li>Data Structures and Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>DBMS</li>
            <li>Cloud Computing</li>
            <li>Machine Learning</li>
            <li>Image Processing</li>
        </ul>
  
<h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Skills</h2>
<div className='mt-5 flex justify-center flex-wrap gap-7'>

            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;