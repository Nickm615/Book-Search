const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    authors: [authors]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me(username: String!, _id: ID!): User
}
type Mutation{
    addUser(username: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook()
    removeBook()
}
`