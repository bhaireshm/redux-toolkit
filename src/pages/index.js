import React from 'react'
import CocktailList from "../components/CocktailList"
import SearchCocktail from "./SearchCocktail"

function HomeComponent() {
    return (
        <div className="container">
            <SearchCocktail />
            <CocktailList />
        </div>
    )
}

export default HomeComponent