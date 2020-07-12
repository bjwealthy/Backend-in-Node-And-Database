import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// import knex from './knex'
// import routes from './src/hostels/routes';

// import { ApolloServer, gql } from 'apollo-server-express';
// import graphql from 'graphql';
import cors from 'cors';

const app = express();
// knex.queryBuilder();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // Check if to be true or false


// import 'dotenv/config';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const schema = gql`
//   type Book {
//     title: String
//     author: String
//   }

//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//   {
//     title: 'Harry Potter and the Chamber of Secrets',
//     author: 'J.K. Rowling',
//   },
//   {
//     title: 'Jurassic Park',
//     author: 'Michael Crichton',
//   },
// ];

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

// const server = new ApolloServer({ typeDefs: schema, resolvers });

// server.applyMiddleware({ app });

app.use(cors());
const port = process.env.PORT || 3000;



app.listen(port, () =>
  console.log(`\Server listening on port ---> ${port}\n`)
);


// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`\n=== Server listening on port ${port}\n`);
// });
