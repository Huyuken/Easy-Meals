import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const RecipeDisplay = () => {
  const { state } = useLocation();
  const recipeId = state.recipeId;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    axios(options)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Servings: {recipe.servings}</p>
      <p>Ready in: {recipe.readyInMinutes} minutes</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.originalString} ({ingredient.amount} {ingredient.unit})
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.analyzedInstructions[0].steps.map(step => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDisplay;
