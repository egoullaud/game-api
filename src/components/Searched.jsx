import {Link, useParams} from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Searched() {
  const [searchedGames, setSearchedGames] = useState({});
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${name}`)
    const games = await data.json();
    setSearchedGames(data.results);
    console.log(games);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);


  return (
    <div className='searched-grid grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 g-1 '>
      {searchedGames.map((data) => {
        return(
          <div key={data.id}>
            <Link to={'/searched/'+data.name}>
              <img src={data.background_image} 
              alt={data.name}
              className='w-full object-cover'/>
              <h4
              className='hover:underline text-[#eeeeee] text-center p-[1rem] w-[90%]'> {data.name}</h4>  
            </Link> 
          </div>
        )

      })}

      
    </div>
  )
}

export default Searched
