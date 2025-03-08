import React from 'react'
import Container from '../_components/container'
import  Link  from 'public/svgs/link.svg';
function page() {
  return (
    <Container>
      <div className='flex flex-col justify-start items-center pb-4  '>
        <div className='text-2xl font-bold'>
          Experiments
        </div>
        <div className='p-5'>
          <h3> Dev Joke</h3>
          <div>

          </div>
          <a href="#"  target='_blank' className='relative'>Find Me
          <img  src="/svgs/link.svg" alt="Notion Avatar" className="h-4 w-4 absolute top-0 -right-6 "  />
          </a>
        </div>
        <div className='p-5'>
          <h3>3D Cube   </h3>
          <div>
            <p>

            </p>
          </div>
          <a href="https://portfolio-ivory-three-13.vercel.app/" target='_blank' className='relative'>Find Me 
            <img  src="/svgs/link.svg" alt="Notion Avatar" className="h-4 w-4 absolute top-0 -right-6 "  />
          </a>
        </div>
        <div className='p-5 font-silk'>
          <h3>Pix Draw  </h3>
          <div>

          </div>
          <a href="#"  target='_blank' className='relative'>Find Me
          <img  src="/svgs/link.svg" alt="Notion Avatar" className="h-4 w-4 absolute top-0 -right-6 "  />
          </a>
        </div>
        <div className='p-5'>
          <h3>Pixel Face  </h3>
          <div>

          </div>
          <a href="#"  target='_blank' className='relative'>Find Me
          <img  src="/svgs/link.svg" alt="Notion Avatar" className="h-4 w-4 absolute top-0 -right-6 "  />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default page
