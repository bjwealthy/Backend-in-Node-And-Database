import express, { Application } from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/schema';


const app: Application = express();

app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));


const apolloServer: ApolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: "/graphql" });

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`\nGraphQL Server running on ---> http://localhost:${port}/graphql\n`)
);
