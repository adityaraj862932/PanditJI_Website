import React from 'react'
import Pooja_list from './Pooja_list'

function BookPage() {

  return (
    <div>
      <div className="h-full w-[100%] bg-orange-300 flex p-8 gap-8 justify-around overflow-x-hidden overflow-y-auto bg-cover flex-wrap">
     { Pooja_list.map((puja,index)=>(

      <div key={index} className='h-[35vh] w-[30%]  flex p-1 bg-orange-500 rounded-2xl'>
        
        <div className='h-full w-2/5 flex items-center justify-center '>
          <img className='h-full w-full rounded-2xl' src={puja.Image} alt="" />
        </div>
        

        <div className='p-2 h-full w-3/5'>
        <div className='h-[10%] w-full flex items-center justify-center text-lg text-white '>
          <strong>{puja.Name}</strong>   
        </div>
        <div className='h-[1px] w-full bg-white'></div>
        <div className='h-[60%] w-full text-center p-2 text-white'>{puja.About}</div>
        <div className='h-[30%] w-full flex items-center justify-center'>
          <button className='p-2 rounded-lg flex items-center justify-center bg-slate-200 text-black  hover:bg-green-500 hover:text-cyan-50 '><strong>Book Now</strong></button>
        </div>
        </div>
      </div>    
      ))}
    </div>
    </div>
  )
}

export default BookPage
