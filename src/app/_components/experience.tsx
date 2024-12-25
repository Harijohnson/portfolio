import React, { useState, useEffect } from 'react';
import './experience.css';
import './work.css'
const Experience: React.FC = () => {
  return (
      <div >
        {/* <div className='flex '>
          <div className=''>
            <p className=' text-lg  font-bold'> 2024-03 - current</p>
          </div>
          <div className=''> 
            <p className=' text-lg  font-bold mb-3'> Webchirpy  -  Full-Stack Developer</p>
            <p>
            At WebChirpy, I’m a Django Full-Stack Developer by day and a code whisperer by night, 
            crafting web magic that works like a charm. My days are a mix of taming REST APIs,
            mastering Django ORM for SQL databases, and wrangling Linux environments like a pro.
              On the frontend, I channel my inner artist to design sleek interfaces with React or Next.js, 
              ensuring they sync beautifully with the backend. It’s a mix of logic, creativity, 
              and just enough chaos to keep things exciting—because who says coding can’t be fun?
            </p>
            <ul className='flex'>
              
              <li className='px-2 point-btn' >
                Django
              </li>
              <li className='px-2 point-btn' >
                React.js
              </li>
              <li className='px-2 point-btn' >
                Next.js
              </li>
              <li className='px-2 point-btn' >
                SQL
              </li>
              <li className='px-2 point-btn' >
                REST API
              </li>
              <li className='px-2 point-btn' >
                Linux
              </li>
              <li className='px-2 point-btn' >
                Javascript
              </li>
              <li className='px-2 point-btn' >
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div> */}

        {/* <div className="">
          <div className=''>
              <p className=' text-lg  font-bold'> 2023-08 - 2023-11</p>
          </div>
          <div className=''> 
            <p className=' text-lg  font-bold mb-3'>Softcrylic Technology  -  Python Developer Intern </p>
            <p>
              During my three-month internship at Softcrylic, I gained practical experience in Python programming,
              focusing on data manipulation and analysis. My primary responsibilities included working with NumPy and 
              Pandas to clean, process, and transform complex datasets into structured, meaningful formats. 
              I also explored optimising data workflows and learned best practices for handling large datasets efficiently. 
              This internship allowed me to enhance my problem-solving skills, deepen my understanding of data-driven solutions,
              and build a solid foundation for future roles in data-focused development.
            </p>
            <ul className='flex'>
              <li className='px-2 point-btn' >
                Python
              </li>
              <li className='px-2 point-btn' >
                NumPy
              </li>
              <li className='px-2 point-btn' >
                Pandas
              </li>
              <li className='px-2 point-btn' >
                DSA
              </li>
              <li className='px-2 point-btn' >
                Excel
              </li>
              <li className='px-2 point-btn' >
                SQL
              </li>
            </ul>
          </div>
        </div> */}
        
        
        <div>
          <p className='text-lg font-bold mb-2'> My Journey !</p>
          <div className='mb-5'>
            <div>
              <div className="relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md"></div>
                <header
                  className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-white sm:col-span-2"
                  aria-label="2024 to Present"
                >
                  2024 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-white">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-white text-base"
                        href="#"
                        aria-label="WebChirpy - Full-Stack Developer"
                      >
                        <span>
                          <span className="inline-block"> WebChirpy - </span>
                          Full-Stack Developer
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-base leading-normal text-white">
                    At WebChirpy, I’m a Django Full-Stack Developer by day and a code whisperer by night,
                    crafting web magic that works like a charm. My days are a mix of taming REST APIs,
                    mastering Django ORM for SQL databases, and wrangling Linux environments like a pro.
                    On the frontend, I design sleek interfaces with React or Next.js, ensuring they sync
                    beautifully with the backend.
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {["Django", "React.js", "Next.js", "SQL", "REST API", "Linux", "JavaScript", "Tailwind CSS"].map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-white bg-opacity-50 px-4 py-1 text-sm font-medium leading-5 text-black">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-5'>
            <div>
              <div>
                <div className="relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-white sm:col-span-2"
                    aria-label="2023-08 to 2023-11"
                  >
                    2023-08 — 2023-11
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-white">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-white text-base"
                          href="#"
                          aria-label="Softcrylic Technology - Python Developer Intern"
                        >
                          <span>
                            <span className="inline-block"> Softcrylic Technology - </span>
                            Python Developer Intern
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-base leading-normal text-white">
                      During my three-month internship at Softcrylic, I gained practical experience in Python
                      programming, focusing on data manipulation and analysis. My primary responsibilities included
                      working with NumPy and Pandas to clean, process, and transform complex datasets into structured,
                      meaningful formats.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      {["Python", "NumPy", "Pandas", "DSA", "Excel", "SQL"].map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-white bg-opacity-50 px-4 py-1 text-sm font-medium leading-5 text-black">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
  );
};

export default Experience;
