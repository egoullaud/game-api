import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'




function TopRated() {
    //set empty array to start
    const [topRated, setTopRated] = useState([]);

    useEffect(()=> {
        getTopRated();
    }, []);

    // grab data from API
    const getTopRated = async () => {
        //check local storage for data
            const gamesApi = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2021-01-01,2022-11-13&ordering=-added`)
            const data = await gamesApi.json();
            // console.log(data);
            localStorage.setItem("topRated", JSON.stringify(data.results));
            setTopRated(data.results);
        };
        
  return (
    <div >
    <div className='md:px-24 px-8  text-[#eeeeee] border-b-2 border-b-[#a9081c] '>
      <h3 className='text-start text-3xl bold py-4'>Top Rated</h3>
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
    {topRated.map((data) => {
        return(
            <SplideSlide key={data.id}>
                <div  className='relative h-[20rem] overflow-hidden' >
                    <Link to={"/game/"+data.id}>
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

export default TopRated
