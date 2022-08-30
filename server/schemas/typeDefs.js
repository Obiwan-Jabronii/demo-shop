const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        price: Float
        category: Category
        quantity: Int
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type User {
        _id: ID
        username: String
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
        product(_id:ID!): Product
        user: User
        order(_id: ID!): Order
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;