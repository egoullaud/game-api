import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Search() {
    //set empty string to accept any input
    const [input, setInput] = useState("");
    //go to searched item
    const navigate = useNavigate();
    //prevent refresh and navigate to searched item
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/"+input);
    };
  return (
    <div className='flex justify-center py-[15rem] w-full bg-[url("../public/red-lines.jpg")] bg-no-repeat bg-cover bg-center '>
      <form onSubmit={submitHandler}>
        <div>
            <input 
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder='Find game...'
                value={input}
                className='border-none rounded-lg flex justify-center text-center md:translate-x-[-25%] translate-x-[-15%] w-[140%] lg:w-[200%] h-[2.5rem] bg-[#ededed] '
            />
        </div>
      </form>
    </div>
  )
}

export default Search
