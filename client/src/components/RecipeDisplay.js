import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import saveRecipe from '../api/api';

const RecipeDisplay = () => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const recipeId = window.location.href.split("/")[window.location.href.split("/").length -1]
  console.log(recipeId)

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

  // const handleSave = async (event) => {
  //   console.log(event.target)
  //   try {
  //     const response = await axios.post('/api/', recipeInfo);
  //     console.log('Recipe saved successfully', savedRecipe);
  //     if(!response.data) {
  //       console.log(response)
  //     }
  //     const savedRecipe = await saveRecipe(response.data);
  //     if(!savedRecipe) {
  //       console.log(savedRecipe)
  //     }
  //     if(savedRecipe) {
  //       alert('Recipe Saved!')
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to save recipe');
  //   }
  // };

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
      {/* <button onClick={handleSave}>Save Recipe</button> */}
    </div>
  );
};

export default RecipeDisplay;
