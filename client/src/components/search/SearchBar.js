import React, { useContext, useState }from 'react'
import SearchContext from '../../context/SearchContext'
import '../../styles/search.css'


function SearchBar() {
    const [feedSearch, setFeedSearch] = useContext(SearchContext)

    const searchWord = e => {
        setFeedSearch(e.target.value)

    }
    return (
        <div className='searchBar'>
            {document.body.classList.add("search-body")}
            <input type='text' placeholder='Search' onChange={searchWord} />
        </div>
    )
}

export default SearchBar
