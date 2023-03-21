// major update required, change the schemas and understand the models and update
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Favorite, Recipe, Grocery } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    groceryList: async () => {
      return await Grocery.find({});
    },
    favorites: async (parent, { user }) => {
      return await Favorite.find({ _id: user });
    },

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

addRecipe: async (parent, recipe, context) => {
  
      const user = await User.findById(context.user._id);
      if (!user) {
        throw new AuthenticationError('User not found');
      }

      const { _id, title, image, servings, readyInMinutes, ingredients, instructions } = recipe;
      const favoriteRecipe = { id: _id, title, image, servings, readyInMinutes, ingredients, instructions };

      const isFavorite = user.favorites.some(favorite => favorite.id === _id);
      if (isFavorite) {
        throw new UserInputError('Recipe is already in favorites');
      }

      user.favorites.push(favoriteRecipe);
      await user.save();
      return user.favorites;
    },
  }
};

module.exports = resolvers;
