
import { CiLocationArrow1 } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCode } from 'react-icons/fa';
import rock_paper_scissor from '../assets/rock_paper_scissor.png'
import personal from '../assets/personal.png'
import todo from '../assets/todo.png'
import platform from '../assets/platformer.png'
import pokemon from '../assets/pokemon.png'
import sample from '../assets/sample.png'


function Project() {

    const projects = [
        {
            id: 1,
            title: "Personal portfolio",
            description: "This React application exemplifies modern front-end development practices by integrating advanced UI techniques with Tailwind CSS, leveraging scalable icons with React Icons, and enhancing typography with Google Fonts. The project highlights the power of React and its ecosystem in building sophisticated, user-friendly web applications.",
            image: personal,
            code: "https://www.google.com",
            demo: "https://www.google.com",

        },
        {
            id: 2,
            title: "sample site",
            description: "This React application leverages API integration for dynamic data, the Context API for global state management, and React Router DOM for seamless navigation. The project provides a practical example of building a modern web application with React, showcasing how to manage state, fetch data, and handle routing efficiently.",
            image: sample,
            code: "https://github.com/Nikhilsahu31/Sample_site",
            demo: "sample-site-theta.vercel.app",


        },
        {
            id: 3,
            title: "Todo App",
            description: "This To-Do app built with React showcases fundamental React concepts, such as component-based architecture, state management, and event handling. It provides a practical example of how React can be used to create interactive and user-friendly applications.",
            image: todo,
            code: "https://github.com/Nikhilsahu31/Todo_App_React",
            demo: "todo-app-react-iota-lime.vercel.app",


        },
        {
            id: 4,
            title: "Pokemon Search app",
            description: "Created a web app using HTML, CSS, and JavaScript that fetches and displays Pokémon data from an API. Designed a user- friendly interface with responsive styling to ensure usability across different devices.",
            image: pokemon,
            code: "https://github.com/Nikhilsahu31/pokemon-search-app",
            demo: "https://nikhilsahu31.github.io/pokemon-search-app/",


        },
        {
            id: 5,
            title: "Rock paper scisssor game",
            description: "This Rock, Paper, Scissors game is a straightforward implementation that demonstrates basic game logic, user interface interaction, and state management using HTML, CSS, and JavaScript. It provides a fun and interactive way for users to engage with a classic game and practice basic programming concepts.",
            image: rock_paper_scissor,
            code: "https://github.com/Nikhilsahu31/Rock_paper_scissors_game",
            demo: " https://nikhilsahu31.github.io/Rock_paper_scissors_game/",


        },
        {
            id: 6,
            title: "platform game",
            description: "Developed a Platformer Game: Created an interactive platformer game using HTML, CSS, and JavaScript, featuring player movement, gravity, and collision detection Applied OOP Concepts: Used object-oriented programming to structure game elements like Player, Platform, and CheckPoint.",
            image: platform,
            code: "https://github.com/Nikhilsahu31/Platformer_Game",
            demo: " https://nikhilsahu31.github.io/Platformer_Game/",


        },

    ]


    return (
        <div name="portfolio" className='w-full h-full  italic  z-10 bg-gradient-to-br from-gray-900 via-gray-950 to-black '>
            <div className='max-w-[95%] mx-auto  flex  items-center lg:ml-20 group border-b-2 border-gray-600'>
                <h1 className='text-3xl text-gray-200 font-bold mb-4 md:mb-2 uppercase  group'>Projects</h1>
                <MdKeyboardDoubleArrowRight size={40} className="text-gray-200 mx-4  group-hover:rotate-90 duration-200 group-hover:text-blue-400 group-hover:mx-0 " />
            </div>
            <div className='max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3  md:p-10  '>
                {projects.map(({ id, title, description, demo, code, image }) => (

                    <div key={id}
                        className=' w-full  bg-gray-700 p-2  rounded-lg shadow-md justify-center items-center '>
                        <div className=' bg-black text-gray-200 rounded-lg hover:scale-95 duration-300 hover:shadow-2xl shadow-gray-300' >

                            <div className='w-full sm:h-80 object-cover'>
                                <img src={image} alt="" className='rounded-lg w-full h-full mb-4 object-fill' />
                            </div>
                            <div className="w-full sm:h-60 md:h-52">
                                <h3 className='text-2xl font-bold  text-center px-4'> {title}</h3>
                                <p className='text-sm  font-medium  my-4 text-justify px-4'>{description}</p>
                            </div>

                            <div className='flex flex-col md:flex-row  justify-center items-center w-full md:h-16 p-4'>

                                <button className='p-2 max-w-full md:max-w-1/2 text-gray-200 bg-black  rounded-lg font-bold text-2xl capitalize m-2 hover:scale-95 duration-200 flex group hover:text-[#405DE6] border-[#405DE6] border-r border-l'>
                                    <a href={demo} target="_blank" className='mr-3 flex'>Preview  <CiLocationArrow1 size={30} color="#5B51D8"
                                        className='group-hover:-rotate-45 duration-300 group-hover:shadow-[#405DE6] shadow-md ml-2 ' /></a>

                                </button>

                                <button className='p-2 bg-black max-w-full md:max-w-1/2  text-gray-200 rounded-lg font-bold text-2xl capitalize m-2 hover:scale-95 duration-200 flex group hover:text-[#fccc63] border-[#fccc63] border-r border-l '>
                                    <a href={code} target="_blank" className='mr-3 flex'>code  <FaCode size={30} color="#fccc63"
                                        className=' group-hover:shadow-[#fccc63] shadow-md ml-2' /></a>

                                </button>

                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Project


