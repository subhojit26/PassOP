import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col items-center justify-center bottom-0 w-full'>
        <div className='logo font-bold text-white text-2xl'>
        <span className='text-green-500'> &lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
          
        </div>
        <div>
        Created with <img className='w-6 inline' src="heart.gif" alt="" /> by Subho.
        </div>
      
    </div>
  )
}

export default Footer
