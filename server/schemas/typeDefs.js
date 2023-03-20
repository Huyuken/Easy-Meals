// typedefs should be updated first in the build while understanding what the different object types will be
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type GroceryList {
    _id: ID
   items:{
   type: [String]}
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Recipe {
    _id: ID
    id: Number
    title: String!
    image: String
    servings: Number
    readyInMinutes: Number
    ingredients: [String]
    instructions: [String]
  }

  type Favorite {
    _id: ID
    id: Number
    title: String!
    image: String
    servings: Number
    readyInMinutes: Number
    ingredients: [String]
    instructions: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    recipes: [Recipe]
    favorite: [Favorite]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addFavorite(id: Number, title: String!, image: String, servings: Number, readyInMinutes: Number, ingredients: [String], instructions: [String]): [Favorite!]
  }
`;

module.exports = typeDefs;
