// import knex from '../config/knex';
import { UserProfileQueryInterface } from '../interfaces/queryInterfaces';
import { Queries } from '../endpoints/userProfiles/queries';

export const resolvers = {
  Query: {
    profiles: async () => {
      const profiles = await Queries.getAllUserProfiles();
      return profiles;
    },

    profile: async (root: any, args: { id: number }) => {
      const profile = await Queries.getUserProfileById(args.id);
      return profile;
    },
    profileEmail: async (root: any, args: { email: string }) => {
      const profile = await Queries.getUserProfileByEmail(args.email);
      return profile;
    }
  },

  Mutation: {
    createProfile: async (root: any, payload: UserProfileQueryInterface) => {
      await Queries.addUserProfile([
        {
          ...payload
        }
      ]);

      const newProfile = {
        ...payload
      };
      return newProfile;
    },
    deleteProfileById: async (root: any, args: { id: number }) => {
      const del = await Queries.deleteUserProfileById(args.id)
      return del
    }
  },
}

