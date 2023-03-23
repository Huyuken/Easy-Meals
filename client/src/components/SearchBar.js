import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
      params: {
        ingredients: searchInput,
        number: '5',
        ignorePantry: 'true',
        ranking: '1'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row searchbar">
          <input
            type="search"
            placeholder="Search..."
            onChange={handleChange}
            value={searchInput}
          />
          <div>
            <button type="submit">SEARCH</button>
          </div>
        </div>
      </form>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={{
              pathname: `/recipes/${recipe.id}`, state: {
                recipeId: recipe.id
              }
            }}>
              <h2>{recipe.title}</h2>
            </Link>
            <img src={recipe.image} alt={recipe.title} />
            <p>Missing Ingredients: {recipe.missedIngredientCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;