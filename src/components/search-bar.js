import React from 'react';
import "./search-bar.css"

const SearchBar = () => {
    return <form className="search-bar__form">
        <input className="search-bar__input" type="text" placeholder="Search Github"></input>
        </form>

}

export default SearchBar