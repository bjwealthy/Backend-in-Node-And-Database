"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
type Profile {
  id: ID
  name: String
  email: String
  phone: String
}

type Query {
  profile(id: ID): Profile
  profileEmail(email: String): Profile
  profiles: [Profile!]
}

type Mutation {
  createProfile(
    name: String
    email: String
    phone: String
  ): Profile!

  deleteProfileById(
    id: ID
  ): Profile

  deleteProfileByEmail(
    email: String
  ): Profile

  editProfileById(
    id: ID
    name: String
    email: String
    phone: String
  ): Profile

  editProfileByEmail(
    email: String
    name: String
    phone: String
  ): Profile
}
`;
