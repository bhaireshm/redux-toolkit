import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const fetchCocktails = createAsyncThunk("cocktails", async () => {
    return fetch(`${url}search.php?s=`).then(r => r.json());
});

export const fetchSingleCocktail = createAsyncThunk("singleCocktail", async ({ id }) => {
    return fetch(`${url}lookup.php?i=${id}`).then(r => r.json());
});

const cocktail = createSlice({
    name: "CocktailSlice",
    initialState: {
        cocktails: [],
        cocktail: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [fetchCocktails.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks;
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [fetchSingleCocktail.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchSingleCocktail.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktail = action.payload.drinks;
        },
        [fetchSingleCocktail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default cocktail.reducer;