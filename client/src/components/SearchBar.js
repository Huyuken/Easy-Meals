import React, {useState} from 'react'
import axios from 'axios'


const SearchBar = () => {
const [searchInput, setSearchInput] = useState("");

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
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

return <form>
  <div class="flex-row">
  <input type="search" 
placeholder="Search..." 
onChange={handleChange} 
value={searchInput} 
/>
<div>
  <button type='submit' onClick={handleFormSubmit}>SEARCH</button>
</div>
</div>
</form>



};

export default SearchBar;