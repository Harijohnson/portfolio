import React, { useState, useEffect } from 'react';
import Company from './company';

import './experience.css';
import Projects from './projects';
const Experience: React.FC = () => {
  return (
    <div className="">
        <div className="first-slide text-white p-6 rounded-lg shadow-md max-w-xl mx-auto mt-10 text-center">
          <h1 className="text-2xl font-bold mb-4">Do you want connect with me?</h1>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/harijohnson" target='_blank'>
              <img src="svgs/github-142-svgrepo-com.svg" alt="Github" className="h-10 w-10 svg-color " />
            </a>
            <a href="https://www.linkedin.com/in/harikrishnan-n-60550a230/" target="_blank">
              <img src="svgs/linkedin-rounded-svgrepo-com.svg" alt="LinkedIn" className='h-10 w-10 svg-color' />
            </a>
            <a href="https://leetcode.com/u/Harikrishnan72/" target="_blank">
              <img src="svgs/leetcode-svgrepo-com.svg" alt="LeetCode" className='h-10 w-10 svg-color' />
            </a>
            <a href="https://www.geeksforgeeks.org/user/harijn72/" target="_blank" className=''>
              <img src="svgs/geeksforgeeks-svgrepo-com.svg" alt="GeeksForGeeks" className='h-10 w-10 svg-color' />
            </a>
            <div className="flex align-center justify-center">
            <a href="pdf/hari-resume.pdf" target="_blank" className='m-auto'>
              <span className='text-xl font-bold'>Resume</span>
              {/* <img src="svgs/arrow-up-right-svgrepo-com.svg" alt="Resume" className='h-5 w-4 svg-color' /> */}
            </a>
            </div>
          </div>
        </div>
        <div className="second-slide">
          <Company />

          <Projects />
        </div>


    </div>
  );
};

export default Experience;
