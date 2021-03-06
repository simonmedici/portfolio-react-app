import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import JQuery from '../assets/jquery.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[color:var(--background-color)] text-[color:var(--text-color)]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[color:var(--highlight-color)]'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-20'>

        <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
        </div>
        <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
        </div>
        <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
            <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>REACT</p>
        </div>
        <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className='my-4'>TAILWIND</p>
        </div>
        <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
            <p className='my-4'>GITHUB</p>
        </div>
           
          </div>
        </div>
      </div>
    
  )
}

export default Skills