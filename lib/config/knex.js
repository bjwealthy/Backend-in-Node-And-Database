"use strict";
// connection file for connecting to the database
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../knexfile"));
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = knexfile_1.default[environment];
const connection = knex_1.default(environmentConfig);
exports.default = connection;
