const express = require('express');
const graphqlHTTP = require('express-graphql');

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

    getUserPostsAndComments: function(id) {
        let { id: index } = id;
        let person = users.find(user => index == user.id);
        let userComments = comments.find(comment => index == comment.id);
        let userPost = posts.find(post => index == post.id);
        return {
            name: person.name,
            commentTitle: userComments.name,
            commentBody: userComments.body,
            postTitle: userPost.title,
            postBody: userPost.body,
        }
    },

    // CREATE NEW USER
    setUser: function(input) {
        let newUser = {
            id: input.input.id,
            name: input.input.name,
            username: input.input.username,
            email: input.input.email,
        }

        users.push(newUser);
        return users;
    },
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