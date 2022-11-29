import React from 'react'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'


function RPG() {
    const [rpg, setRpg] = useState([]);

    useEffect(() => {
      getRpg();
    }, []);
  
  const getRpg = async () => {
    const rpgApi = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&genres=role-playing-games-rpg`);
    const data = await rpgApi.json();
    console.log(data);
    localStorage.setItem("rpg", JSON.stringify(data.results));
    setRpg(data.results);
  }
  
    return (
      <div className='mb-10'>
      <div className='md:px-24 px-8  text-[#eeeeee] border-b-2 border-b-[#a9081c] '>
        <h3 className='text-start text-3xl bold py-4'>Role Playing Games</h3>
        <Splide
            options={{
                arrows:false,
                pagination: false,
                drag:'free',
                gap:'0.25rem',
                mediaQuery:'min',
                breakpoints: {
                    1440:{
                        perPage: 5,
                    },
                    1024:{
                        perPage: 4,
                    },
                    768:{
                        perPage: 2,
                    },
                    640:{
                        perPage: 2,
                    },
                },
            }}
        >
      {rpg.map((data) => {
          return(
              <SplideSlide key={data.id}>
                  <div  className='relative h-[20rem] overflow-hidden' >
                      <Link to={"/game/"+data.name}>
                          <img src={data.background_image} 
                          alt={data.name}
                          className='w-full h-[70%] object-cover overflow-y-hidden rounded-md shadow-2xl'
                          />
                          <h4
                          className='hover:underline text-[#eeeeee] text-center pt-[1rem] w-[90%]'
                          > {data.name}</h4>  
                      </Link>
    
                  </div>
              </SplideSlide>
          )
         
          })}
          </Splide>
          </div>
    </div>
    )
}

export default RPG
