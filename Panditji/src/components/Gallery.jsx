import React from 'react'
import Photos from './Photos'
function Gallery() {
  return (
    <div className='h-screen w-full bg-orange-100 p-10 grid grid-cols-4 gap-4'>
      {/* <div className='h-[300px] w-[200px] bg-orange-500' key={index}></div> */}
      {
        Photos.map((photo, index) => (
          // <div className='grid grid-cols-4 gap-4'>
            <div className='h-[300px] w-[300px]' key={index}>
              <img src={photo.photo} alt="" />
            </div>
          // </div>
        ))

      }

    </div>

  )
}

export default Gallery;