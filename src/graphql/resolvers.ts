import {
  profiles,
  profile,
  profileEmail,
  createProfile,
  deleteProfileById,
  deleteProfileByEmail,
  editProfileById,
  editProfileByEmail
} from './userProfiles/userProfiles';


export const resolvers = {
  Query: {
    profiles,
    profile,
    profileEmail
  },

  Mutation: {
    createProfile,
    deleteProfileById,
    deleteProfileByEmail,
    editProfileById,
    editProfileByEmail
  }
}
