"use strict";
// Update with your config settings.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
};
