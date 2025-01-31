import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[88vh] relative '>
        <div className="text absolute right-[6vw] top-[14vh] text-center">
            <h1 className='text-6xl font-semibold text-orange-500'>A Home For Hindu Devotees</h1>
            <h1 className='mt-5 text-2xl'>वैदिक संस्कृति वैदिक संस्कार</h1>
        <p className='text-3xl mt-2'>Bringing the essence of <br />
        ancient Vedic traditions to your doorstep.</p>
        </div>
        
        <img src="https://vaikunth.co/front_assets/image/about-us-img/about-1.png" alt="" className='absolute bottom-0'/>
    </div>
  )
}

export default Hero