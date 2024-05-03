import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className='logo font-bold text-white text-2xl'>
        <span className='text-green-500'> &lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
          
        </div>
        
        <button className='text-white bg-green-700 hover:bg-green-800 my-2 rounded-full flex justify-between items-center mr-7 ring-white ring-1'>
          <img className='invert p-1 w-[60px] ' src="github.png" alt="" />
          <span className='font-bold flex justify-center items-center pr-5'>Github</span>
        </button>
        </div>
    </nav>
  )
}

export default Navbar
