import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Upcoming from '../components/Upcoming'
import TopRated from '../components/TopRated'
import Genre from '../components/Genre'


function Home() {
  return (
    <div>
        <Search/>   
        <Upcoming/> 
        <TopRated/>
        {/* <Genre/> */}
    </div>
  )
}

export default Home
