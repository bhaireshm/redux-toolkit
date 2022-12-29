import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { fetchCocktails } from "../redux/CocktailReducer";

function CocktailList() {
    const { cocktails, loading } = useSelector(state => ({ ...state.cocktail }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCocktails());
    }, []);

    return (
        <div className="section p-2">
            {loading ? <span>loading...</span> :
                (<div className="row">
                    {cocktails && cocktails.map(c => (
                        <div key={c.idDrink} className="col-3">
                            <Link to={"cocktail/" + c.idDrink}>
                                <div className="card m-2" key={c.idDrink}>
                                    <div className="card-title">{c.idDrink}</div>
                                    <div className="card-body">
                                        <img className="img-fluid rounded" src={c.strDrinkThumb} alt={c.strAlcoholic} />
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    )}
                </div>
                )
            }
        </div>
    );
}

export default CocktailList