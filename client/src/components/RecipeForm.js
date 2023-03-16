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
    const [userInput,setUserInput]=useState('')
    const handleChange=(event)=>{
        console.log('user input',event.target.value)
        setUserInput(event.target.value)
    }

    const handleEnter=(event)=>{
        if(event.keyCode===13){
            setIngredientsList([...ingredientsList,userInput])
            setUserInput("")
        }
    }
        
    return <div>
    <h1>ingredients List</h1>
    <p><b>you entered:</b>{userInput}</p>
    <input onKeyDown={handleEnter} onChange={handleChange} type="text" placeholder="Enter ingredient name" />
        <ul>
        {ingredientsList.map((ingredient,index)=><li style={{marginBottom:"10px"}} key={`ingredient-${index}`}>
                {ingredient} <button onClick={()=>deleteIngredient(index)} style={{marginLeft:"20px"}}>X</button>
            </li>)}
    </ul>
</div>
}

export default RecipeForm