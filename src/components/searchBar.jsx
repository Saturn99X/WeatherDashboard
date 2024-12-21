import React from "react";
import search from '../assets/icons/search.svg';
import { useState } from "react";

const SearchBar = ({ onSearch }) => {

    const [SearchTerm, setSearchTerm] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(SearchTerm);  
      };
    
    return(
        <form onSubmit={handleSubmit}>
        <div className="w-[27.5%] h-9 flex flex-row text-[#FAEBD7] absolute mx-5 p-2 rounded-xl bg-[rgba(255, 255, 255, 0.2)] backdrop-blur-lg
        border border-white absolute top-0 left-0 border-opacity-20 shadow-lg">
           <input className="bg-transparent flex w-[100%] font-semibold mr-[5%] text-[#FAEBD7] " type="text" placeholder="Enter your Location" 
            value={SearchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} />
            <button type="submit" className="ml-2 my-[-7px] p-2 bg-transparent rounded">
            <img className=" flex justify-center w-7   ml-[5%] my-[-3px] hover:scale-110 "
                src={search} alt="search" />
           </button>
               
         
       </div>
       
       </form>

    );
}

export default SearchBar;