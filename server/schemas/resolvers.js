// major update required, change the schemas and understand the models and update
const { AuthenticationError } = require('apollo-server-express');
const { User, Favorite, Recipe, Grocery } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    groceryList: async () => {
      return await Grocery.find({});
    },
    favorites: async (parent, { user }) => {
      return await Favorite.find({ _id: user });    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

//     saveRecipe: async (_, { recipeInfo }, { db }) => {
//       try {
//         const collection = db.collection('recipes');
//         const result = await collection.insertOne(recipeInfo);
//         const savedRecipe = result.ops[0];
//         savedRecipe.id = savedRecipe._id.toString();
//         delete savedRecipe._id;
//         return savedRecipe;
//       } catch (error) {
//         console.error(error);
//         throw new Error('Failed to save recipe');
//    }
//  }
  }
};

module.exports = resolvers;
