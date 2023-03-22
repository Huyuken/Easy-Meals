import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';
import { REMOVE_RECIPE } from '../utils/mutations';
import { Link } from "react-router-dom";

const UserPage = () => {
  const { loading, error, data } = useQuery(QUERY_USER);
  const [removeRecipe] = useMutation(REMOVE_RECIPE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const user = data.user;

  const handleRemoveRecipe = (id) => {
    removeRecipe({ variables: { id } }).then(() => {
      window.location.reload(); 
    });
  };
  
  return (
    <div className="user-page">
      {user ? (
        <h1>
          Welcome, {user.firstName} {user.lastName}!
        </h1>
      ) : (
        <p>No user found</p>
      )}
      <div className="saved-recipes-container">
        {user &&
          user.favorites.map((recipe, index) => (
            <div key={index} className="recipe"> <Link to={{
              pathname: `/favorite/${recipe._id}`, state: {
                id: recipe._id
              }
            }}><h2>{recipe.title}</h2></Link>
              
              <img
                src={recipe.image}
                alt="recipe image"></img>
              <button onClick={() => handleRemoveRecipe(recipe._id)}>
                Remove
              </button>
              {/* Additional recipe information */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserPage;
