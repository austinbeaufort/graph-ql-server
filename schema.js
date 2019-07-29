const { buildSchema } = require('graphql');

const schema = buildSchema(`

    type User {
        id: Int
        name: String
        username: String
        email: String
        company: Company
        address: Address
    }

    type Company {
        name: String
        catchPhrase: String
    }

    type Address {
        street: String
        suite: String
        city: String
        zipcode: String
        geo: Geo
    }

    type Geo {
        lat: String
        lng: String
    }

    type Comment {
        postId: Int
        id: Int
        name: String
        email: String
        body: String
    }

    type Post {
        userId: Int
        id: Int
        title: String
        body: String
    }

    type Query {
        getPosts: [Post]
        getComments: [Comment]
        getUsers: [User]
        getUserCommentsById(id: Int!): String
    }
`)

module.exports = schema;