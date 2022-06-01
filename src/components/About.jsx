import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[color:var(--background-color)] text-[color:var(--text-color)]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[color:var(--highlight-color)]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-4xl font-bold'>
                        <p>Hi. I'm Simon, happy to have you.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id purus mattis velit elementum aliquet 
                            non ut neque. Donec vitae interdum odio. Duis ut porttitor orci. Sed pellentesque molestie ex at 
                            convallis. Pellentesque blandit eget libero quis gravida. Suspendisse maximus rhoncus eros, quis gravida 
                            felis aliquam non. Nullam sit amet viverra sapien. Morbi vestibulum placerat purus, non placerat ante 
                            sodales id. Aliquam egestas eleifend tellus eu vestibulum. Nullam bibendum nisl dolor, ac placerat 
                            turpis dictum eu. Curabitur sagittis urna velit, eget convallis nulla consequat quis. Integer in 
                            lacinia tortor. Sed sed efficitur velit.
                        </p>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default About