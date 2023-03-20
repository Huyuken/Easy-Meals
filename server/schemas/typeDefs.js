// typedefs should be updated first in the build while understanding what the different object types will be
const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Grocery {
    items: [String]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    favorites: [Favorite]
  }

  type Recipe {
    _id: ID
    id: ID
    title: String!
    image: String
    servings: Int
    readyInMinutes: Int
    ingredients: [String]
    instructions: [String]
  }

  type Favorite {
    _id: ID
    id: ID
    title: String!
    image: String
    servings: Int 
    readyInMinutes: Int
    ingredients: [String]
    instructions: [String]
  }

  type Query {
    recipes: [Recipe]
    groceryList: [Grocery]
    favorites(user: ID): [Favorite]
    user: User,
  }

  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addFavorite(id: ID, title: String!, image: String, servings: Int, readyInMinutes: Int, ingredients: [String], instructions: [String]): [Favorite!]
  }
`;

module.exports = typeDefs;
