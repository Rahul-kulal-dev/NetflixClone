import React from 'react'
import { FaInfoCircle, FaPlay } from 'react-icons/fa'

function VideoTitle({overview,title}) {
  return (
      <div className='text-white absolute top-[30%] left-[10%] z-10 max-w-xl'>
      <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-4'>
        Welcome to Rahul's World of Creativity
      </h1>
      <p className='text-lg md:text-xl mb-6'>
        Explore amazing videos, discover inspiring stories, and dive into powerful content crafted just for you. Start your journey now!
      </p>
      <div className='space-x-4 flex'>
        <button className='bg-white px-6 py-3 font-semibold rounded text-black flex items-center gap-2 hover:bg-gray-200 transition'>
          <FaPlay /> Play
        </button>
        <button className='bg-gray-800 px-6 py-3 font-semibold rounded text-white border border-white flex items-center gap-2 hover:bg-white hover:text-black transition'>
          <FaInfoCircle /> Watch More
        </button>
      </div>
    </div>

  )
}

export default VideoTitle