import React from 'react'
import Navbar from '../Commponent/Navbar'

function About() {
  return (
    <div>
      <Navbar/>
      <div className="mt-[100px] flex justify-center">
        <div className="w-[50%] ml-36">
          <h1 className='text-7xl font-bold'>Hello</h1>
           <h1 className='text-6x1 font-bold'>A Bit About Me</h1>
          <p className='mt-10'>I am a Paragraph. Click Here To Add Your own Text and Edit me. <br /> i’m a great place for you to  Tell A Story. And Let your <br /> User Know A Little About You.</p>
          <div className='flex gap-3 mt-7'>
          <button className='w-16 h-16 rounded-full bg-red-700  font-medium text-white' >Project</button>
          <button className='w-16 h-16 rounded-full bg-blue-700 font-medium text-white'>Resum</button>
          <button className='w-16 h-16 rounded-full bg-black    font-medium text-white'>Contact</button>

          </div>     </div>
        <div className="w-[50%]  flex justify-center items-center">
          <img
            src="src/assets/Ellipse 1.png"
            id="one"
            alt=""
            className="w-[500px]"
          />
          <img
            src="src/assets/logo.jpg"
            id="two"
            alt=""
            className="hidden w-[500px]"
          />
        </div>
      </div>

    </div>
  )
}

export default About;
