import React, {useState} from 'react'
import Searched from './Searched';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${slug}`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }

  return (
    <div>
      <div className='game-search flex justify-center py-[10rem] w-full bg-[url("../public/red-lines.jpg")] bg-no-repeat bg-cover bg-center'>
        <form onSubmit={onSubmit}>
          <input type="text" 
          placeholder='search games'
          value={searchTerm}
          onChange={handleChange} 
          className='border-none rounded-lg flex justify-center text-center md:translate-x-[-25%] translate-x-[-15%] w-[140%] lg:w-[200%] h-[2.5rem] bg-[#ededed] '/>
          <br></br>
          <input type="submit" className='hidden'/>
        </form>
      </div>
      <div
       >
      <Searched gameResults={gameResults} />
      </div>
        
      
    </div>
  );
}

//   return (
//     <div className='flex justify-center py-[15rem] w-full bg-[url("../public/red-lines.jpg")] bg-no-repeat bg-cover bg-center '>
//       <form onSubmit={onSubmit}>
//         <div>
//             <input 
//                 onChange={handleChange}
//                 type="text"
//                 value={searchTerm}
//                 className='border-none rounded-lg flex justify-center text-center md:translate-x-[-25%] translate-x-[-15%] w-[140%] lg:w-[200%] h-[2.5rem] bg-[#ededed] '
//             />
//         </div>
//         <Searched gameResults={gameResults}/>
//       </form>
//     </div>
//   )
// }

export default Search
