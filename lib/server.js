"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
// import graphql from 'graphql';
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
// import 'dotenv/config';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const schema = apollo_server_express_1.gql `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
const resolvers = {
    Query: {
        books: () => books,
    },
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs: schema, resolvers });
server.applyMiddleware({ app });
app.use(cors_1.default());
app.listen(3000, () => console.log('Now browse to http://localhost:3000' + server.graphqlPath));
