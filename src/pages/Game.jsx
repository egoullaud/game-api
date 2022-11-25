import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BiLinkExternal} from 'react-icons/bi'


function Game() {
    let params = useParams();
    const [details, setDetails] = useState([]);
    
    const getDetails = async () => {
        const data = await fetch(`https://api.rawg.io/api/games/${params.name}?key=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };
    
    useEffect(() => {
        getDetails();
    }, [params.name]);
    
  return (


    <div>
        <div className='lg:mx-24 lg:mb-24 mb-10'>
            <div>
                <img src={details.background_image} alt={details.name}/>
            </div>
            <div>
                <h2 className='text-[#eeeeee] text-lg font-bold py-4 mx-4 md:pl-5'> {details.name}  </h2>
                <div className='flex justify-between mb-4 mx-4 text-sm md:mx-10 md:text-md'>
                    <h2 className='text-[#eeeeee]'><a className='flex' href=
                    {details.website}>
                        Visit Website <BiLinkExternal/></a></h2>
                        {details.released !== null && 
                         <h2 className='text-[#eeeeee]'> 
                    Release Date: {details.released}</h2>}
                   
                 
                    <h2 className='text-[#eeeeee]'> | {details.genres?.map((genre) =>
                         {return( ` ${genre.name} |` )
                           
                            } 
                            )} 
                         </h2>
                    <h2 className='text-[#eeeeee]'> | {details.platforms?.map(platform =>
                         {return( ` ${platform.platform.name} | ` )
                           
                            } 
                            )} 
                    </h2>
                
                    <h2 className='text-[#eeeeee] mr-4'>Rating: {details.rating}/{details.rating_top}</h2>

           
                </div>
                
                    <div className='md:mx-10 mx-8'>
                        <p 
                            className='text-[#eeeeee] text-sm md:text-md md:leading-6'
                            dangerouslySetInnerHTML={{__html: details.description}}>
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Game
