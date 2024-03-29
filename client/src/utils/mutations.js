import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// can be updated to add stuff to grocery list
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;
export const ADD_RECIPE = gql`
  mutation addRecipe(
    $id: ID!
    $title: String!
    $image: String!
    $servings: Int!
    $readyInMinutes: Int!
    $ingredients: [String!]!
    $instructions: [String!]!
  ) {
    addRecipe(
      id: $id
      title: $title
      image: $image
      servings: $servings
      readyInMinutes: $readyInMinutes
      ingredients: $ingredients
      instructions: $instructions
    ) {
      _id
      id
      title
      image
      servings
      readyInMinutes
      ingredients
      instructions
    }
  }
`;

export const REMOVE_RECIPE = gql`
  mutation removeRecipe($id: String!) {
    removeRecipe(id: $id) {
      _id
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const REMOVE_RECIPE = gql`
  mutation removeRecipe($id: ID!) {
    removeRecipe(id: $id) {
      _id
    }
  }
`;