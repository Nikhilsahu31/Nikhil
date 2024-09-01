import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgMail } from 'react-icons/cg';



function SocialIcons() {
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
    return (
        

            <div className='light  hidden lg:flex flex-col top-[30%] left-0 fixed '>
                <ul>
                    {
                        icons.map(({ id, scr, icon, alt, download }) => (
                            <li key={id}
                                className='w-40 px-4 font-semibold bg-gray-950 rounded-sm  ml-[-95px] cursor-pointer p-3 hover:ml-[1px] hover:rounded-md scale-95 duration-200 text-yellow-50 light:text-slate-950 capitalize ' >
                                <a href={scr} target='_blank' className='mr-2 flex justify-between items-center' download={download}><span>{alt}</span> <>{icon}</> </a>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>

        



    )
}

export const icons = [

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



export default SocialIcons