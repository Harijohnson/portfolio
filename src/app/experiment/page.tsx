import React from 'react'
import Container from '../_components/container'
function page() {
  return (
    <Container>
      <div className='flex flex-col justify-start items-center pb-4  '>
        <div className='text-2xl font-bold'>
          Experiments
        </div>
        <div className='p-5'>
          <h3> Balloons</h3>
          <div>

          </div>
          <a href="#">pop-balloon</a>
        </div>
        <div className='p-5'>
          <h3>Photo Gallery  </h3>
          <div>

          </div>
          <a href="#">photo-gallery</a>
        </div>
        <div className='p-5'>
          <h3>Pixel Draw  </h3>
          <div>

          </div>
          <a href="#">pixel-draw</a>
        </div>
        <div className='p-5'>
          <h3>Pixel Face  </h3>
          <div>

          </div>
          <a href="#">pixel Face</a>
        </div>
      </div>
    </Container>
  )
}

export default page
