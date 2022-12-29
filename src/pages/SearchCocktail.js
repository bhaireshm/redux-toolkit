import React, { useRef } from 'react'

function SearchCocktail() {
    const inputRef = useRef();
    return (
        <div className="section m-2 p-2">
            <div className="search">
                <label htmlFor="name">Search</label>
                <input type="search" id="name" className="form-control form-control-bg" placeholder="search cocktail..." ref={inputRef} />
            </div>
        </div>
    )
}

export default SearchCocktail