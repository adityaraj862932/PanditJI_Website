import React from 'react'

function About() {
  return (
    <div className='w-full h-[100vh] flex justify-between bg-orange-100'>
  <div className = "left w-[50vw] md:w-[40vw] h-[88vh] md:ml-5 hidden md:block" >
    <img src="https://vaikunth.co/front_assets/image/home-page-image/orange_chakker.png" alt="" className='h-[80vh] mt-6' />
      </div>
  <div className="right left w-full md:w-[60vw] h-[88vh] text-start flex items-center text-[2vh] md:text-[3vh] font-[Urbanist]">
    <h1>Vaidik Brahmin gives you everything you need in one place. We do different puja, rituals, and ceremonies depending on what you want. Professionals make sure that these ceremonies are done in the most real way possible. <br />
      All of our pujas are done by Pandits/Purohits that we have carefully screened. We have 47 Pandits right now, and that number is growing quickly thanks to all of your love and support.
      We look at your personal astrology chart to figure out which pujas and when they should be done. We also make a custom alignment for your personal problems.
      We do special pujas for important Hindu rituals like Navratri, Diwali, Holi, Lakshmi Puja, etc., which are held on those days.
      We do pujas to bless the birth of a baby, a new home, a new business, and other new things. <br />
      We sell puja items for different types of Vedic pujas. You can customise your puja items or choose from our ready-made puja packages.
      We also deliver temple prasads, so you can get blessings from different temples while staying at home.</h1>
  </div>
    </div>
  )
}

export default About

