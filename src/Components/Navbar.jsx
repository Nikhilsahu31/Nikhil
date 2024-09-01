import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-scroll'
const Navbar=()=> {
    const [nav, setnav] = useState(false)

    const icons = [

        {
            id: 1,
            scr: "https://www.linkedin.com/in/nikhil-sahu-7a438926b/",
            icon: <FaLinkedin size={30} color={"#3b5998"} />,
            alt: "linkedin"

        },
        {
            id: 2,
            scr: "https://github.com/Nikhilsahu31/",
            icon: <FaGithub size={30} color={"#fff"} />,
            alt: "gitHub"

        },
        {
            id: 3,
            scr: "https://www.instagram.com/_nikk.hill_/",
            icon: <FaInstagram size={30} color="#E1306C" />,
            alt: "instagram"

        },
        {
            id: 4,
            scr: "mailto:sahunikhil848@gmail.com",
            icon: <CgMail size={30} color='#FCAF45' />,
            alt: "mail"

        },
        {
            id: 5,
            scr: "/nikhil_resume.pdf",
            icon: <BsFillPersonLinesFill size={50} color="#5b51d8" />,
            alt: "Download resume",
            download: true

        },
    ]

    const links = [
        {
            id: 1,
            linkName: "home"
        },

        {
            id: 2,
            linkName: "about"
        },
        {
            id: 3,
            linkName: "portfolio"
        },
        {
            id: 4,
            linkName: "contect"
        },

    ]

    return (
        <div className='flex justify-between item-center w-full h-20 text-gray-300 fixed p-4 shadow-sm shadow-gray-500 light:text-slate-950 light:bg-white z-50 bg-gradient-to-br from-gray-950 via-gray-950 to-black ' >
            <div>
                <h1 className='text-5xl  capitalize italic font-neww ml-5 md:ml-12 font-bold'> <Link to='home' seamless duration={500}>nikhil</Link></h1>
            </div>


            <ul className='md:flex hidden justify-evenly items-center'>
                {links.map(({ id, linkName }) => (
                    <li key={id}
                        className='grid justify-center items-center md:w-24 lg:w-36 mx-4 pb-2 h-auto  cursor-pointer capitalize text-2xl text-gray-200 hover:scale-95 duration-200  font-semibold hover:text-white hover:border-l-2 hover:border-r-2 border-gray-400 rounded-2xl'>
                        <Link to={linkName} smooth duration={500}>
                            {linkName}
                        </Link>
                    </li>
                )
                )}
            </ul>
            <div onClick={() => { setnav(!nav) }} className=' text-3xl text-gray-400 cursor-pointer md:hidden p-2 px-10 absolute right-4'>
                {nav ? <FaTimes size={40} /> : <FaBars size={40} />}
            </div>
            <div>
                {nav &&
                    <div className='w-full h-screen italic absolute flex flex-col items-center left-0 top-20  duration-300 bg-gradient-to-tr form-slate-950 via-slate-900 to-black rounded-b-lg'>

                        <ul className=''>
                            {links.map(({ id, linkName }) => (
                                <li key={id}
                                    className=' py-6  cursor-pointer capitalize text-2xl text-gray-400  rounded-lg font-semibold  hover:text-yellow-50 ' >
                                    <Link onClick={() => { setnav(!nav) }} to={linkName} smooth duration={500}>
                                        {linkName}
                                    </Link>
                                </li>
                            )
                            )}
                        </ul>

                        <ul className='flex flex-wrap justify-center '>
                            {
                                icons.map(({ id, scr, icon, alt, download }) => (
                                    <li key={id}
                                        className='w-40 h-auto px-4 font-semibold  bg-gray-950 p-3 m-1 rounded-lg shadow-sm shadow-gray-400' >
                                        <a href={scr} target='_blank' className='flex justify-evenly items-center' download={download}><span>{alt}</span> <>{icon}</></a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>}

            </div>

        </div>
    )
}

export default Navbar