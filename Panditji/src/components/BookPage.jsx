import React from 'react'


function BookPage() {

  const pujaList = [
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/04/lakshmi-puja-decoration-150x150.jpg",
      Name: "Lakshmi Puja",
      About: "Performed to seek blessings of Goddess Lakshmi for wealth and prosperity, especially on Diwali."
    },
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/29_08_2022-ganesh-chaturthi1_23023192-e1710942242501-300x300.webp",
      Name: "Ganesh Chaturthi Puja",
      About: "Dedicated to Lord Ganesha, this puja is performed to remove obstacles and bring good fortune."
    },
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/unnamed-e1710942278260-300x300.jpg",
      Name: "Navratri Durga Puja",
      About: "A nine-day festival worshipping Goddess Durga, symbolizing victory over evil forces."
    },
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/ic_satyanarayan-pujan-e1710942312823-300x300.jpg",
      Name: "Maha Shivratri Puja",
      About: "A sacred night of Lord Shiva, observed with fasting and chanting for spiritual awakening."
    },
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/ic_satyanarayan-pujan-e1710942312823-300x300.jpg",
      Name: "Saraswati Puja",
      About: "Dedicated to Goddess Saraswati, the goddess of wisdom and learning, celebrated in schools and homes."
    },
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/ic_satyanarayan-pujan-e1710942312823-300x300.jpg",
      Name: "Satyanarayan Puja",
      About: "A ritual performed for prosperity, well-being, and overcoming difficulties, dedicated to Lord Vishnu."
    },
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/navratrimaadurga-e1711184335630-300x300.jpg",
      Name: "Kali Puja",
      About: "Worship of Goddess Kali for strength and protection, primarily celebrated in West Bengal."
    },
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/ic_satyanarayan-pujan-e1710942312823-300x300.jpg",
      Name: "Chhath Puja",
      About: "A festival dedicated to the Sun God, Surya Dev, observed mainly in Bihar and Uttar Pradesh."
    },
    {
      Image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/ic_satyanarayan-pujan-e1710942312823-300x300.jpg",
      Name: "Hanuman Jayanti Puja",
      About: "A special puja dedicated to Lord Hanuman, performed for strength and protection from evil."
    },

  ];
  
  


  return (
    <div>
      <div className="h-full w-[100%] bg-orange-300 flex p-8 gap-8 justify-around overflow-x-hidden overflow-y-auto bg-cover flex-wrap">
     { pujaList.map((puja,index)=>(

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
