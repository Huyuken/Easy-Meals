// typedefs should be updated first in the build while understanding what the different object types will be
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Recipe {
    id: ID 
    title: String
    image: String
    servings: Int
    readyInMinutes: Int 
    ingredients: [String]
    instructions: [String]
  }


  type Grocery {
    items: [String]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
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
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
