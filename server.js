const express = require('express');
const graphqlHTTP = require('express-graphql');
const axios = require('axios');

// DUMMY DATA
const { posts, comments, users } = require('./data');
//SCHEMA
const schema = require('./schema');



// RESOLVERS
const root = {
    getPosts: function() {
        return posts;
    },

    getComments: function() {
        return comments;
    },

    getUsers: function() {
        return users;
    },

    getUserCommentsById: function() {
        let us
    }
}



// SERVER
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log(`Server running on port 4000`);