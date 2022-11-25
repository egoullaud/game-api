import { Route, Routes, useLocation } from 'react-router-dom'
import React from 'react'
import Home from './Home';
import Game from './Game';
import AllGenres from './AllGenres';
import Searched from '../components/Searched';

function Paths() {
    const location = useLocation();
  return (
    <Routes location ={location} key={location.pathname}>

        <Route path="/" element={<Home/>}/>
        <Route path="/game/:name" element={<Game/>}/>
        <Route path="genre/genres" element={<AllGenres/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>

    </Routes>
  )
}

export default Paths
