import React from 'react'
import { SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaReact, FaNode } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import Avtar from '../assets/Avtar.jpg'
function About() {
    const icons = [
        {
            id: 1,
            icon: <TiHtml5 size={70} color="#e34c26" />
        },
        {
            id: 2,
            icon: <IoLogoCss3 size={70} color="#264de4" />
        },
        {
            id: 3,
            icon: <SiJavascript size={65} color="#FCAF45" />
        },
        {
            id: 4,
            icon: <RiTailwindCssLine size={70} color="#0d8ede" />
        },
        {
            id: 5,
            icon: <FaReact size={70} color="#50B8E2" />
        },
        {
            id: 6,
            icon: <FaGitAlt size={70} color="#f1502f" />
        },
        {
            id: 7,
            icon: <TbBrandRedux size={70} color="#764abc" />
        },

        {
            id: 8,
            icon: <VscVscodeInsiders size={70} color="#0078d7" />
        },
        {
            id: 9,
            icon: <SiMysql size={60} color="#f29111" />
        },
    ]

    return (
        <div name="about" className='w-full h-full pt-10  italic bg-gradient-to-tr from-gray-900 via-gray-950 to-black'>


            <div className='pt-20'>
                <div className='text-gray-300  flex flex-col-reverse md:flex-row md:p-8 w-[95%] mx-auto'>
                    <div className='w-[95%] md:w-1/2 p-8'>
                        <h1 className='text-3xl font-bold italic pb-2 text-gray-200'>Hey!</h1>
                        <p className=' text-xl lg:3xl text-pretty italic'>
                            I am a dedicated Front-End Developer  and a Master of Computer Application degree. My expertise lies in React JS, where I specialize in building dynamic, responsive web applications. Currently, I am further enhancing my skills by learning the MERN stack, focusing on MongoDB, Express.js, React JS, and Node.js.
                        </p>
                    </div>
                    <div className='w-[95%] md:w-1/2 grid justify-center items-center'>
                        <div className='max-w-72 max-h-72 md:w-96 md:h-96 border-8 border-gray-600 rounded-md ml-5 sm:ml-0'>
                            <div className=' max-w-72 max-h-72 md:w-96 md:h-96  relative -left-5 bottom-4 md:bottom-10 md:-left-10 object-cover  '>
                                <img src={Avtar} alt=" avtar pic" className='w-full h-full rounded-md' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-full px-4 mx-auto lg:ml-20 py-3 '>
                    <h1 className=' text-xl md:text-3xl italic text-gray-300 font-bold mb-4 md:mb-2  capitalize  '>Educations</h1>
                    <div className=' w-full  md:flex md:w-3/4 mx-auto justify-between' >

                        <div className=' w-full md:w-[45%] h-auto  p-2 rounded-md shadow-sm shadow-gray-300 my-2'>
                            <h3 className='text-gray-200 font-medium  md:text-2xl md:py-2 capitalize  text-wrap '>Master of computer applications</h3>
                            <h2 className=' text-gray-200 font-medium  md:text-xl md:py-2 capitalize  text-wrap'>Sharda university</h2>
                            <p className='text-gray-400 font-medium  md:text-xl md:py-2 capitalize  text-wrap'>Year of Graduation: 2024</p>
                        </div>
                        <div className=' w-full md:w-[45%] h-auto  p-2 rounded-md shadow-sm shadow-gray-300 my-2'>
                            <h3 className='text-gray-200 font-medium  md:text-2xl md:py-2 capitalize  text-wrap'>Bachelor of computer applications</h3>
                            <h2 className=' text-gray-200 font-medium  md:text-xl md:py-2 capitalize  text-wrap'>Hemchand Yadav Vishwavidyalaya</h2>
                            <p className='text-gray-400 font-medium  md:text-xl md:py-2 capitalize  text-wrap'>Year of Graduation: 2022</p>
                        </div>
                        
                    </div>
                </div>
            </div>




            <div className='w-full h-full '>
                <div className='max-w-[95%] px-4 mx-auto lg:ml-20  '>
                    <h1 className=' text-2xl md:text-3xl italic text-gray-300 font-bold mb-4 md:mb-2 uppercase   '>skills</h1>
                    <p className='text-white font-medium  md:text-2xl md:py-2 capitalize  text-wrap'>I love to learn new things and experiment with new technologies.
                        These are some of the major languages, technologies, tools and platforms I have worked with:</p>
                </div>
                <div>

                    <div className=' w-[95%] px-6 mx-auto grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 justify-center items-center lg:px-40 md:20 py-4 md:py-10 '>
                        {
                            icons.map(({ id, icon }) => (
                                <div key={id} className='w-20 h-20 bg-slate-950   rounded-lg flex justify-center items-center shadow-lg shadow-gray-600 hover:scale-90 duration-300' >
                                    {icon}
                                </div>
                            ))}


                    </div>
                    <div className='pb-10 w-[95%] mx-auto px-4'>
                        <h3 className='text-xl md:text-2xl text-gray-300 font-bold mb-4 md:mb-2 uppercase  max-w-[95%] mx-auto lg:ml-20 '>currently woking on</h3>
                        <div className='grid px-8 grid-cols-2 gap-3 sm:grid-col-3 md:grid-cols-5 justify-center items-center md:px-40 pt-4'>
                            <div className='w-20 h-20 bg-slate-950   rounded-lg flex justify-center items-center shadow-lg shadow-gray-600 hover:scale-90 duration-300' >
                                <FaNode size={70} color="green" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About