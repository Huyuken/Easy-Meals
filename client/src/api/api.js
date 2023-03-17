import axios from 'axios';

const saveRecipe = async (recipeInfo) => {
  try {
    const response = await axios.post('/api/', recipeInfo);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save recipe');
  }
};

export default saveRecipe;