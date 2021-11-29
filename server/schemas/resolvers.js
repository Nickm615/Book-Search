const { User } = require('../models');

const resolvers = {
    Query: {
        oneUser: async () => {
            return await User.find({})
        }
    }
}