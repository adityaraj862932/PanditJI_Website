import React from 'react'
import Photos from './Photos'
function Gallery() {
  return (
    <div className='h-screen w-screen bg-orange-200  p-10 flex flex-col overflow-x-hidden'>
        <div className='w-full h-[15%] flex items-center justify-center text-5xl '><strong >My Work</strong></div>
        <div className='h-[2px] w-full bg-black'></div>
        <div className=' flex justify-center  pt-5 gap-4 overflow-y-auto w-full h-[80%] flex-wrap'>
        { 
            Photos.map((photo,index)=>(
                <div className='h-[200px] w-[19%] rounded-xl '>
                <img className=' rounded-xl h-[200px] w-full' src={photo.photo} alt="" />
            </div>
            ))
           
        }</div>

</div>
    
  )
}

export default Gallery;