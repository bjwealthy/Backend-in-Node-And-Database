// Update with your config settings.
require('dotenv').config();

export = {
  development: {
    client: "pg",
    connection: 'postgres://localhost/upathlearning',
    migrations: {
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 5,
    },
  },

  // test: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL_TEST,
  //   migrations: {
  //     directory: './src/migrations'
  //   },
  //   seeds: {
  //     directory: './src/seeds/test'
  //   },
  //   useNullAsDefault: true
  // },
};
