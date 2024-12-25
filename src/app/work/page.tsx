import React from 'react'
import Container from '../_components/container'
import './work.css'
function page() {
  return (
    <Container>
      <div >
        <div className='flex grid grid-rows-2 grid-flow-col gap-4'>
          <div className='row-span-3 '>
            <p className=' text-lg  font-bold'>Webchirpy   2024-03 - current</p>
          </div>
          <div className='row-span-3 '> 
            <p className=' text-lg  font-bold mb-3'>Full-Stack Developer</p>
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
        </div>
        <div className="flex grid grid-rows-2 grid-flow-col gap-7">
          <div className='row-span-3 '>
              <p className=' text-lg  font-bold'>Softcrylic Technology   2023-08 - 2023-11</p>
          </div>
          <div className='row-span-3 '> 
            <p className=' text-lg  font-bold mb-3'>Python Developer Intern </p>
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
        </div>
      </div>
    </Container>
  )
}

export default page
