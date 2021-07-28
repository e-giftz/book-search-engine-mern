const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    input BookInput {
        authors: [String]
        description: String
        title: String
        bookId: ID
        image: String
        link: String
    }

    type  Query {
        users: [User]
        user(username: String!): User
        me: User
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }

    type Auth {
        token: String!
        user: User
    }
`;

module.exports = typeDefs;