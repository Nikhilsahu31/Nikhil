import React from 'react'
import { HiDocumentArrowDown } from "react-icons/hi2";
import { Typewriter } from 'react-simple-typewriter';


function Home() {

  return (

    <div name='home' className='max-h-screen italic max-w-screen bg-gray-800 text-gray-200 pt-20' >
      <div className='grid justify-center'>
        <div className='w-screen h-screen object-cover'>
          <img src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bg img" className='w-full h-full' />
        </div>
        <div className='w-[90%] h-full absolute top-56 p-8 lg:p-28 '>
          <h1 className='text-3xl  lg:text-5xl font-bold  '> Hello! </h1>



          <h1 className='text-3xl capitalize font-bold pt-2'> I am a <span><Typewriter
          words={['nikhil','web developer','full stack developer']}
          cursor
          
          typeSpeed={50}
          deleteSpeed={100}
          delaySpeed={2000}
          loop={true}

          /></span></h1>
          <p className='text-balance capitalize  lg:text-pretty text-base lg:text-xl font-medium py-3'>
            I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes - turns out hacking together a custom reblog button taught me a lot about
            HTML & CSS!
          </p>
          <p className='text-balance  capitalize lg:text-pretty text-base lg:text-xl font-medium py-3'>
            Fast-forward to today My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
          </p>

          <div className='flex border-2 border-gray-200 w-60 justify-center items-center p-2 rounded-md cursor-pointer hover:scale-105 duration-300 mt-2 hover:bg-green-800'>
            <a className='text-2xl font-bold px-2 ' target='_blank' href='./nikhil_resume.pdf'>Download CV </a>
            < HiDocumentArrowDown size={40} color='' />
              </div>
        </div>
            
      </div>
    </div>
  )
}

export default Home