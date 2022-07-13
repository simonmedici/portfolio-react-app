import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[color:var(--background-color)] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/99268d76-cd8d-456c-9c2e-19f8379ae39f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[color:var(--highlight-color)] text-[color:var(--text-color)]'>Contact</p>
                <p className='text-[color:var(--text-color)] py-4'>Submit the form below or shoot me an email - simon.sebastian.medici@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 resize-none' name='message' rows="8" placeholder='Message' ></textarea>
            <button className='text-white border-2 hover:bg-[color:var(--highlight-color)] hover:border-[color:var(--highlight-color)] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact