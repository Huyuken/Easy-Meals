import React, { useState, useEffect } from 'react';
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

const RecipeDisplay = ({ recipe }) => {
    const [recipeInfo, setRecipeInfo] = useState(null);
    const { loading, error, data } = useQuery(QUERY_USER);
    const recipeId = window.location.href.split("/")[window.location.href.split("/").length - 1]
    console.log(recipeId)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    const user = data.user;








    return (
        <div>
        {/* //     <h2>{recipeInfo.title}</h2>
        //     <img src={recipeInfo.image} alt={recipeInfo.title} />
        //     <p>Servings: {recipeInfo.servings}</p>
        //     <p>Ready in: {recipeInfo.readyInMinutes} minutes</p>
        //     <h3>Ingredients:</h3>
        //     <ul>
        //         {recipeInfo.extendedIngredients.map(ingredient => (
                    <li key={ingredient.id}>
                        {ingredient.name} ({ingredient.amount} {ingredient.unit})
                    </li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {recipeInfo.analyzedInstructions[0].steps.map(step => (
                    <li key={step.number}>{step.step}</li>
                ))}
            </ol> */}
        </div>
    );
};

export default RecipeDisplay;
