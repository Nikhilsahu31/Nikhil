import React from 'react'
import { VscLocation } from "react-icons/vsc";
import { CgMail } from 'react-icons/cg'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FiPlus } from "react-icons/fi";


function Contect() {
    const links = [
        {
            id: 1,
            icon: <FaGithub size={28} />,
            title: "Github",
            href: "https://github.com/Nikhilsahu31/"

        },
        {
            id: 2,
            icon: <FaLinkedin size={28} color="#3b5998" />,
            title: "Linkedin",
            href: "https://www.linkedin.com/in/nikhil-sahu-7a438926b/"

        },
        {
            id: 3,
            icon: <FaInstagram size={28} color='#E1306C' />,
            title: "Instagram",
            href: "https://www.instagram.com/_nikk.hill_/"

        }
    ]
    return (
        <div name='contect' className=' w-full h-full  italic text-gray-200 pt-4 lg:px-8  md:flex justify-evenly  bg-gradient-to-tr from-gray-900 via-gray-950 to-black  '>
            <div className=' max-w-[93%] mx-auto border shadow-lg shadow-gray-600 p-4  rounded-md mt-1 md:w-[45%] '>
                <div>

                    <h1 className='text-2xl w-1/2 text-wrap font-extrabold capitalize pl-10 p-4 '>Let's talk about everything!</h1>
                    <p className='text-xl font-medium capitalize ml-10 w-3/4'> Don't like forms? Send me an <a href="mailto:sahunikhil848@gmail.com" className='text-blue-800 font-bold cursor-pointer hover:scale-75'>Email</a> 👋</p>
                </div>
                <div>
                    <p className='w-full text-center capitalize font-semibold text-2xl m-2'>or find me on:</p>
                    <ul className='flex justify-center items-center' >
                        {links.map(({ id, href, icon }) => (
                            <li key={id}
                                className='bg-black w-12 h-12 flex justify-center items-center m-3 rounded-md cursor-pointer shadow-md shadow-gray-600 group'
                            ><a href={href} target="_blank" className=' group-hover:scale-125 duration-200' > {icon}</a></li>
                        ))
                        }

                    </ul>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col md:flex-row justify-center items-center' >
                        <CgMail size={30} color='#FCAF45' />
                        <p className='p-1 font-medium md:pl-2'>sahunikhil848@gmail.com</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center p-3'>
                        < FaPhoneAlt size={25} color='#5E9F23'/>
                        <p className='p-1 font-medium md:pl-2 flex items-center'><span className='m-1'><FiPlus size={15}/></span>91 7974617004</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <VscLocation size={25} className='text-red-500' />
                        <p className='p-1 font-medium md:pl-2'>India</p>
                    </div>
                </div>
            </div>


            <div className=' max-w-[90%]  italic  mx-auto border shadow-lg shadow-gray-600 p-4 mt-4 md:w-[42%] rounded-md md:mt-1 '>
                <form action="https://getform.io/f/aolgywlb" method='POST'>
                    <label className=' capitalize italic texl-2xl font-semibold p-4 '>send your Message</label >
                    <input type="text" name='name' placeholder="Your Name"  className='bg-transparent border md:my-3 md:p-2 rounded-sm md:rounded-2xl w-full  px-4' required />


                    <input type="email"name='email'  placeholder=" Email" className='bg-transparent my-2 border md:p-2 md:rounded-2xl rounded-sm w-full  px-4'  required/>

                    <input type="text" name='text' placeholder="Subject" className='bg-transparent border md:my-3 rounded-sm w-full md:rounded-2xl md:p-2 px-4' required />

                    <textarea name="text"   cols="10" rows="5" placeholder="Message" className='bg-transparent border md:rounded-2xl md:p-3 w-full my-2 px-3' required></textarea>

                    <button className='w-full border p-1 md:p-2 capitalize bg-transparent hover:bg-blue-500 hover:scale-90 duration-150 font-bold rounded-md cursor-pointer'>Let's Talk</button>
                </form>
            </div>
        </div>
    )
}

export default Contect