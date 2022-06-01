import React from 'react'
import {Link} from 'react-scroll'

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
                        <p>Hi I'm Simon, happy to have you here.</p>
                    </div>
                    <div>
                        <p>I am an explorer by heart, if it’s a new technology, a new skill or a new language. 
                            Always curious to see behind the curtain. This curiosity is my main driver and 
                            propels my creativity and projects every day. My international experience in Monterrey, 
                            Mexico and Melbourne, Australia has shaped my understanding of foreign cultures, 
                            broadened my horizon and multiplied my language skills. I find fulfillment in making 
                            customer dreams come true with top notch digital web experiences. My experience of 
                            working as a product manager in the interface between development and customer helps 
                            me putting myself in the shoes of the customer as well as the user. Therefore, I am 
                            able to fully address the needs of various stakeholders. You’re looking for a full 
                            fetched online appearance? Let’s get in touch.
                        </p>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default About