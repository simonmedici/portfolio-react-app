import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import CvSimonMedici from '../assets/CV_Simon_Medici.pdf';

import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[color:var(--background-color)] text-[color:var(--text-color)] drop-shadow-[0_15px_50px_rgba(209,213,219,0.1)]'>
        <div>
        <Link to="home" smooth={true} duration={500}>
            <h1 className='text-4xl font-bold cursor-pointer'>SM</h1>
        </Link>
        </div>
        
        {/* menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-[color:var(--trans-color)] transition duration-500 ease-out'>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='hover:text-[color:var(--trans-color)] transition duration-500 ease-out'>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='hover:text-[color:var(--trans-color)] transition duration-500 ease-out'>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li className='hover:text-[color:var(--trans-color)] transition duration-500 ease-out'>
                <Link to="work" smooth={true} duration={500}>
                Work
                </Link>
                </li>
                <li className='hover:text-[color:var(--trans-color)] transition duration-500 ease-out'>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[color:var(--background-color)] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[300%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-[color:var(--text-color)]' href="https://www.linkedin.com/in/simon-medici-a5b570180/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-[color:var(--text-color)]' href="https://github.com/simonmedici/">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <Link to="contact" smooth={true} duration={500}>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-[color:var(--text-color)]' href="simon.sebastian.medici@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                </Link>
                <Link to={CvSimonMedici} target="_blank" download>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-400'>
                    <a className='flex justify-between items-center w-full text-[color:var(--text-color)]' href="public/CV_Simon_Medici.pdf ">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
                </Link>
            </ul>

        </div>
    </div>
  )
}

export default Navbar