import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
}
`;