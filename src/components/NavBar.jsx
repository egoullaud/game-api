import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {MdGames} from 'react-icons/md'
import { Link } from 'react-router-dom';
import Genre from './Genre';
import Home from '../pages/Home';
import AllGenres from '../pages/AllGenres';




function NavBar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='bg-[#171717] flex justify-between items-center h-24 m-w-[1240px] mx-auto px-4 text-[#ededed] border-b border-gray-400'>
      <Link to='/' element={<Home/>}><h1 className='flex w-full text-3xl font-bold text-[#DA0037]'><MdGames className='mr-1'/>
        Gamerverse</h1></Link> 
        <ul className='hidden md:flex'>
            <Link to='/' element={<Home/>}><li className='p-4 hover:underline'>Home</li></Link>
            <Link to='/genres/all' element={<AllGenres/>}><li className='p-4 hover:underline'>Genres</li></Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            { !nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
        </div>
        <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[60%] z-10 h-full border-r border-r-gray-500 bg-[#171717] ease-in-out duration-500'}>
        <Link to='/' element={<Home/>}><h1 className=' p-4  flex w-full text-3xl font-bold text-[#DA0037]'><MdGames className='mr-1' size={40}/>Gamerverse</h1></Link>
        <ul className='p-4 uppercase'>
            <Link to='/' element={<Home/>}><li className='p-4 border-b border-gray-500'>Home</li></Link>
            <Link to='/genres/all' element={<AllGenres/>}><li className='p-4 hover:underline'>Genres</li></Link>
        </ul>
        </div>

      </div>
   
  )
}

export default NavBar
