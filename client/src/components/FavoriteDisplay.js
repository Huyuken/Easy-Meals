import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../utils/mutations';
import Auth from "../utils/auth";

const FavoriteDisplay = ({ recipe }) => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const recipeId = window.location.href.split("/")[window.location.href.split("/").length -1]
  const [addRecipe] = useMutation(ADD_RECIPE);
  // console.log(recipeId)

  function showButton () {
    if (Auth.loggedIn()) {
      return (<button onClick={handleSave}>Save Recipe</button>)}
  }

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
        setRecipeInfo(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [recipeId]);

  if (!recipeInfo) {
    return <div>Loading...</div>;
  }

  const handleSave = async (event) => {
    
    // console.log(event.target)
    try {
      const { data } = await addRecipe({
        variables: {
          id: recipeInfo.id,
          title: recipeInfo.title,
          image: recipeInfo.image,
          servings: recipeInfo.servings,
          readyInMinutes: recipeInfo.readyInMinutes,
          ingredients: recipeInfo.extendedIngredients.map(ingredient => ingredient.original),
          instructions: recipeInfo.analyzedInstructions[0].steps.map(step => step.step),
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>{recipeInfo.title}</h2>
      <img src={recipeInfo.image} alt={recipeInfo.title} />
      <p>Servings: {recipeInfo.servings}</p>
      <p>Ready in: {recipeInfo.readyInMinutes} minutes</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipeInfo.extendedIngredients.map(ingredient => (
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
      </ol>
      {showButton()}
    </div>
  );
};

export default FavoriteDisplay;
