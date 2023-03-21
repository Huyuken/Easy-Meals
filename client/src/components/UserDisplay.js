import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';

const UserPage = () => {
  const { loading, error, data } = useQuery(QUERY_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const user = data.user;

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
            <div key={index} className="recipe">
              <h2>{recipe.title}</h2>
              <img
                src={recipe.image}
                alt="recipe image"></img>
              {/* Additional recipe information */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserPage;