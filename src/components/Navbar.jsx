import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='flex justify-around items-center p-5 shadow-xl h-[80px]' style={{background:" rgb(36,21,0)",
    background: "linear-gradient(90deg, rgba(36,21,0,1) 0%, rgba(201,30,187,1) 45%, rgba(9,148,176,1) 100%)"}}>
        <div className='text-xl font-medium text-white'><Link to="/">Home</Link></div>
            <div className='text-xl font-medium text-white'><Link to="/list">List Of Students</Link></div>
            <div  className='text-xl font-medium text-white'><Link to="/favourite">Favourite Students</Link></div>
        </nav>
    </div>
  )
}

export default Navbar