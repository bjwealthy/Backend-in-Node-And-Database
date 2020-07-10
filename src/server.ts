import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
// import graphql from 'graphql';
import cors from 'cors';

const app = express();

// import 'dotenv/config';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const schema = gql`
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

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app });

app.use(cors());


app.listen(3000, () =>
  console.log('Now browse to http://localhost:3000' + server.graphqlPath)
);
