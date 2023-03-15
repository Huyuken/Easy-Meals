import React from "react";
import { useEffect, useState } from "react";

const RecipeForm = (props) => {
    const [ingredientsList,setIngredientsList]=useState(props.list)
    
    const deleteIngredient = (index)=>{
        const confirmation=window.confirm(`Do you want to delete ${ingredientsList[index]}?`)
        if(confirmation){
            setIngredientsList(ingredientsList.filter((ingredent,position)=>position!==index))
        }
    }
        
    return <div>
    <h1>ingredients List</h1>
    <input type="text" placeholder="Enter ingredient name" />
    {ingredientsList.length === 0 && <p>There are no students in the list!</p>}
        <ul>
        
    </ul>
</div>
}

export default RecipeForm