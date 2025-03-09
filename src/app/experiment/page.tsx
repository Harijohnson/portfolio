import React from 'react'
import Container from '../_components/container'

function page() {
  return (
    <Container>
        <div className='text-2xl font-bold mb-6 justify-start'>
          Experiments
        </div>
      <div className='flex flex-col items-center pb-4 w-full'>
        
        {/* Dev Joke */}
        <div className='w-full flex flex-col md:flex-row mb-8'>
          <div className='w-full md:w-2/4 flex flex-col pr-4'>
            <h3 className='text-xl font-medium'>Dev Joke</h3>
            <a href="#" target='_blank' className='flex items-center gap-1 text-gray-700 hover:underline mt-2'>
              Find Me
              <img src="/svgs/link.svg" alt="External Link" className="h-4 w-4" />
            </a>
          </div>
          
          <div className='w-full md:w-2/4'>
            <p>
              DevJoke is a fun web app where developers can share and enjoy programming jokes, 
              memes, and funny chat-style templates. Whether you need a break from coding or 
              just want a good laugh, DevJoke&lsquo;s got you covered!
            </p>
            <p className='mt-2'>
              <span>
                <strong>What You Can Do :</strong> 
              </span>
              <br/>
                <span className='text-gray-500 hover:underline'>
                  Browse and Post Jokes :{' '}
                </span>
                Check out a mix of text-based jokes, memes, and chat-style templates. Got a joke of your own? Post it and share the laughs!
                
                <br/>
                <span className='text-gray-500 hover:underline'>
                User Accounts : {' '}
                </span>
                Sign up, log in, and keep track of your favorite jokes.
                Like, Share :  Interact with jokes, share them on social media, and join the conversation.
                
                <br/>
                <span className='text-gray-500 hover:underline'>
                Search and Filter : {' '}
                </span>
                 Easily find the jokes that match your vibe.
                
                <br/>
                <span className='text-gray-500 hover:underline'>
                Mobile-Friendly : {' '}
                </span>
                Works smoothly on both desktop and mobile.
            </p>
            <p className='mt-2'>
              <strong >Under the Hood : {' '}</strong> 
              <br/>
              Built with Next.js frontend, Express.js backend, MySQL with Prisma ORM, and hosted on a Hostinger VPS.
            </p>
          </div>
        </div>
        
        <hr className='border-gray-300 w-full' />
        
        {/* 3D Cube */}
        <div className='w-full flex flex-col md:flex-row my-8'>
          <div className='w-full md:w-2/4 flex flex-col pr-4'>
            <h3 className='text-xl font-medium'>Cube Me</h3>
            <a href="https://cube-me.netlify.app/" target='_blank' className='flex items-center gap-1 text-gray-700 hover:underline mt-2'>
              Find Me
              <img src="/svgs/link.svg" alt="External Link" className="h-4 w-4" />
            </a>
          </div>
          
          <div className='w-full md:w-2/4'>
            <p>
             Cube Me is a playful 3D web project featuring three all-black Rubik&lsquo;s cubes floating in a virtual space. Built with Three.js and Vite, the project offers a smooth and interactive 3D experience, all hosted seamlessly on Netlify.
            </p>
            <p className='mt-2'>
              <strong>What Makes It Cool:</strong> Three.js Magic brings the 3D cubes to life with realistic lighting and smooth animations, Vite-Powered for fast loading, and Netlify Hosting keeps everything live and ready for visitors.
            </p>
          </div>
        </div>
        
        <hr className='border-gray-300 w-full' />
        
        {/* Pix Draw */}
        <div className='w-full flex flex-col md:flex-row my-8'>
          <div className='w-full md:w-2/4 flex flex-col pr-4'>
            <h3 className='text-xl font-medium'>Pix Draw</h3>
            <a href="https://pix-draw.netlify.app/" target='_blank' className='flex items-center gap-1 text-gray-700 hover:underline mt-2'>
              Find Me
              <img src="/svgs/link.svg" alt="External Link" className="h-4 w-4" />
            </a>
          </div>
          
          <div className='w-full md:w-2/4'>
            <p>
              Pix Draw is a pixel-art drawing app that lets you unleash your creativity, pixel by pixel! Built with Vite, it offers a smooth and responsive drawing experience with loads of cool features to make creating pixel art super fun and easy.
            </p>
            <p className='mt-2'>
              <strong>Key Features:</strong> Pixel-Perfect Drawing, Colour Picker & Palettes, Grid Control, Export Options, and Advanced Tools like fill, erase, undo, and redo.
            </p>
            <p className='mt-2'>
              <strong>Tech Stack:</strong> Built with Vite for the frontend, Canvas-based rendering with smooth real-time interactions, and ready to host on Netlify.
            </p>
          </div>
        </div>
        
        <hr className='border-gray-300 w-full' />
        
        {/* Pixel Face */}
        <div className='w-full flex flex-col md:flex-row my-8'>
          <div className='w-full md:w-2/4 flex flex-col pr-4'>
            <h3 className='text-xl font-medium'>Pixel Face</h3>
            <a href="#" target='_blank' className='flex items-center gap-1 text-gray-700 hover:underline mt-2'>
              Find Me
              <img src="/svgs/link.svg" alt="External Link" className="h-4 w-4" />
            </a>
          </div>
          
          <div className='w-full md:w-2/4'>
            {/* Empty description from original code maintained */}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default page