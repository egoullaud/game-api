import {Link} from 'react-router-dom';
import React from 'react'


function Searched(props) {
 
  return (
    <div className="searched-grid">
      
      <ul className='flex flex-wrap justify-center'>
      
        {
          props.gameResults.map(game => (
            <li key={game.id}
            className='md:w-[30%] w-[100%] m-2'> 
              <Link to={"/game/"+ game.id}>
                    <img src={game.background_image} alt="game" className='w-full object-cover overflow-x-hidden h-[20vh] rounded-md' />
                  <h4 className='hover:underline text-[#eeeeee] text-center p-[1rem] w-[90%]'> {game.name} </h4>
              </Link>
            </li>
          ))
        }
      </ul>     
    </div>
  );
}

export default Searched
