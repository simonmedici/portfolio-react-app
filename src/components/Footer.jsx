import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div name='footer' className='w-full bg-[color:var(--background-color)] text-[color:var(--text-color)] p-4'>
        <div className='border-b border-[color:var(--text-color)]'></div>
        <div className='flex justify-center items-center'>
            <div>
            <h1 className='p-4 text-sm'>© 2022 Simon Medici, All rights reserved.</h1>
            </div>
            <a className='hover:scale-110 duration-500 justify-center m-4 align-items rounded-full' href='https://www.linkedin.com/in/simon-medici-a5b570180/'><FaLinkedin size={30} /></a>
            <a className='hover:scale-110 duration-500 justify-center m-4 align-items rounded-full' href='https://github.com/simonmedici/'><FaGithub size={30} /></a>
            
        </div>
    </div>
  )
}

export default Footer