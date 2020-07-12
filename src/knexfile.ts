// Update with your config settings.

export default {
  development: {
    client: "pg",
    connection: 'postgres://localhost/upathlearning',
    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    },
    useNullAsDefault: true
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
