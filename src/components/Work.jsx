import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import Worldpng from '../assets/earth.jpeg';
import RealEstatePage from '../assets/realestatepage.jpg';
import ComingSoon from '../assets/comingsoon.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[color:var(--text-color)] bg-[color:var(--background-color)]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[color:var(--text-color)] border-[color:var(--highlight-color)]'>Work</p>
                <p className='py-6'>Check out some of my recent projects</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Realestate API Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://real-estate-web-app-chi.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/simonmedici/real-estate-web-app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Worldpng})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Climatechange Live API
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://rapidapi.com/simonsebastianmedici/api/climate-change-realtime-german/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/simonmedici/climate-change-api/blob/7a7da89f94433215582e4e3ac4095e55d632a7c7/index.js">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${RealEstatePage})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Realestate Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://real-estate-app-black.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/simonmedici/real-estate-app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work