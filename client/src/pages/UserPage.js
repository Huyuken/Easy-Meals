import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Auth from '../utils/auth';

const GET_USER = gql`
  query getUser($email: String!) {
    user(email: $email) {
      firstName
      lastName
      savedRecipes {
        title
        // Add other recipe fields that you need
      }
    }
  }
`;

const UserPage = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: Auth.getProfile().data.email },
    fetchPolicy: 'cache-and-network',
  });

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
          user.savedRecipes.map((recipe, index) => (
            <div key={index} className="recipe">
              <h2>{recipe.title}</h2>
              {/* Additional recipe information */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserPage;
