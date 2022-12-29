import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from "./CocktailReducer";

export const store = configureStore({
    reducer: {
        cocktail: CocktailReducer
    }
})