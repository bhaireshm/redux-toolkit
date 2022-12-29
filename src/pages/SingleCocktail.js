import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../redux/CocktailReducer";

function SingleCocktail() {
    const { loading, cocktail } = useSelector(state => ({ ...state.cocktail }));
    const { id } = useParams();
    const dispatch = useDispatch();
    const [modifiedCocktail, setmodifiedCocktail] = useState({})

    useEffect(() => {
        dispatch(fetchSingleCocktail({ id }))
    }, [dispatch, id])

    useEffect(() => {
        if (cocktail.length) {
            const {
                idDrink: id,
                strDrink: name,
                strDrinkThumb: image,
                strInstructions: desc,
                strGlass: glass,
                strAlcoholic: alcoholic,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4
            } = cocktail[0];

            setmodifiedCocktail({
                id, name, strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                image, desc, glass, alcoholic
            });
        }
    }, [id, cocktail])


    return (
        <div>
            {loading ? <span>Loading...</span> :
                <div className="section m-4 p-2">
                    <div>ID: {modifiedCocktail.id}</div>
                    <div>Name: {modifiedCocktail.name}</div>
                    <div>Description: {modifiedCocktail.desc}</div>
                    <div>Glass: {modifiedCocktail.glass}</div>
                    <div>Alcoholic: {modifiedCocktail.alcoholic}</div>
                    <div>Ingredients: {
                        Object.entries(modifiedCocktail).map(([k, v]) => {
                            if (k.startsWith("strIngredient") && v) return v;
                        }).filter(a => a).join(", ")}</div>
                    <div> <img className="rounded img-fluid my-3" alt={modifiedCocktail.name} src={modifiedCocktail.image} /> </div>


                    <Link to="/" className="btn rounded btn-secondary">Go back</Link>

                </div>}
        </div>
    )
}

export default SingleCocktail