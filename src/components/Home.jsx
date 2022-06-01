import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[color:var(--background-color)]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='italic text-7xl font-bold text-[color:var(--highlight-color)]'><h4></h4></p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>I'm Simon</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] max-w-[500px]'>a web Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[400px]'>I'm a web developer specializing in building digital experiences tailerd to customer needs.
            Currently focused on building responsive web appearences and web applicantions.</p>
            <div>
                <Link to='work' smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[color:var(--highlight-color)] hover:border-[color:var(--highlight-color)]'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home