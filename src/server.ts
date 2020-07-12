import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
// import { ApolloServer, gql } from 'apollo-server-express';

import routes from './endpoints/routes';

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use('/upathlearning', routes);

app.use('/upathlearning', (req, res) => {
  res.send('Welcome to UPATH')
})

app.all('/*', (req, res) => {
  res.send('Path cannot be reached');
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`\n Server listening on port ---> ${port}\n`)
);
