import React from 'react'
import Action from '../components/Genres/Action';
import Indie from '../components/Genres/Indie';
import Adventure from '../components/Genres/Adventure';
import Arcade from '../components/Genres/Arcade';
import BoardGames from '../components/Genres/BoardGames';
import Card from '../components/Genres/Card';
import Casual from '../components/Genres/Casual';
import Educational from '../components/Genres/Educational';
import Family from '../components/Genres/Family';
import Fighting from '../components/Genres/Fighting';
import Mmo from '../components/Genres/Mmo';
import Platformer from '../components/Genres/Platformer';
import Puzzle from '../components/Genres/Puzzle';
import Racing from '../components/Genres/Racing';
import Rpg from '../components/Genres/Rpg';
import Shooter from '../components/Genres/Shooter';
import Simulation from '../components/Genres/Simulation';
import Sports from '../components/Genres/Sports';
import Strategy from '../components/Genres/Strategy';
import Search from '../components/Search'


function AllGenres() {
    return (
          <div>
            <Search/>
            <Action/>
            <Rpg/>
            <Adventure/>
            <Mmo/>
            <Shooter/>
            <Strategy/>
            <Simulation/>
            <Indie/>
            <Sports/>
            <Arcade/>
            <Fighting/>
            <BoardGames/>
            <Puzzle/>
            <Platformer/>
            <Racing/>
            <Card/>
            <Casual/>
            <Educational/>
            <Family/>
          </div>
    )
     
  }
export default AllGenres