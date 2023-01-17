import React, { useState, useEffect } from 'react';
import './searchbar.css';
import { json } from 'react-router-dom';
import axios from 'axios';

function SearchBar() {
  const [searchValue, setSearchValue] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);

  async function handleSearch() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');   //Add api link here
    setApiResponse(response.data);
  }

  return (
    <div className="search-bar">
      <input 
          type="text" 
          value={searchValue}
          placeholder="Order..." 
          onChange={(e) => setSearchValue(e.target.value)}
        />
      <button onClick={handleSearch}>Search</button>  
      <div className="search-results">
        {apiResponse.map((item) => { 
          return (
            <div className="search-result">
              <div className="search-result">Status: {item.status} </div>
              <div className="search-result-body">{item.body}</div>     
            </div>
          )
        })}
      </div>
    </div>
    );
}

export default SearchBar;