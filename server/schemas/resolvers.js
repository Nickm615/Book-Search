const { AutheitcationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require

const resolvers = {
    Query: {
        //replaces getSingleUser in user-controller
        user: async (parent, { username }) => {
            const foundUser =  await User.findOne({$or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            }).populate();
            return foundUser;
        },


    }
}