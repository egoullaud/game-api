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
    <div className='flex justify-center p-10 w-full'>
      <form onSubmit={submitHandler}>
        <div>
            <input 
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder='search'
                value={input}
                className='border-none rounded-lg text-center bg-[#ededed] '
            />
        </div>
      </form>
    </div>
  )
}

export default Search
