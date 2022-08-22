import React, { useEffect, useState } from 'react';
import StaticData from '../Data/StaticData.json';
import MainTable from './MainTable';
import '../styles/mainBox.css';

export default function MainBox() {

  const [inputValue, setInputValue] = useState(""); /*State to handle search input*/
  const [searchResult, setSearchResult] = useState(StaticData); /* State to handle search results */
 
  /* Handle input function */
  const handleInput = (e) => {setInputValue(e.target.value); }
  useEffect(() => {handleSearch(inputValue)}, [inputValue]); 

  /* Search function */
  const handleSearch = (SearchKey) => {
    var keys = ['title', 'author', 'language', 'year'] // fields we have to search in 
    var lowSearchKey = SearchKey.toLowerCase();
    var result = StaticData.filter(obj => keys.some(key =>String(obj[key]).toLowerCase().includes(lowSearchKey)));
    setSearchResult(result);
  }

  return (
    <div className='box'>
      <div className='search-box'>
        <div className="search-container">
        <input type="text" name="search" id="search-input" value={inputValue} placeholder={"Search with Title/Author/Language/Year"} onChange={(e)=>{handleInput(e)}}/>
          <button>Search</button>
        </div>
      </div>
      <MainTable data={searchResult}/>
    </div>
  )
}
