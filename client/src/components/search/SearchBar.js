import React from 'react'
import '../../styles/search.css'

function SearchBar() {
    return (
        <div className='searchBar'>
            {document.body.classList.add("search-body")}
            <input type='text' placeholder='Search' />
        </div>
    )
}

export default SearchBar
