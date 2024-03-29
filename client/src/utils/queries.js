import { gql } from '@apollo/client';

// update to queries to match our project

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      favorites {
        _id
        title
        image
        servings
        readyInMinutes
        ingredients
        instructions
        }
    }
  }
`;

export const QUERY_FAVORITE = gql`
query getFavorite($id: ID) 
  {
    user {
      favorites (id: $id) {
        title
        image
        servings
        readyInMinutes
        ingredients
        instructions
        }
    }
  }
`;
