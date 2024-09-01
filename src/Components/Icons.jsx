import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgMail } from 'react-icons/cg';



export const demo = [

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

