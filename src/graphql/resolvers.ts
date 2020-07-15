// import knex from '../config/knex';
import { UserProfileQueryInterface } from '../interfaces/queryInterfaces';
import { Queries } from '../endpoints/userProfiles/queries';

export const resolvers = {
  Query: {
    profiles: async () => {
      const profiles = await Queries.getAllUserProfiles();
      return profiles;
    },

    profile: async (_: any, { id }: { id: number }) => {
      const profile = await Queries.getUserProfileById(id);
      return profile;
    }
  },

  Mutation: {
    createProfile: async (root: any, args: UserProfileQueryInterface) => {
      await Queries.addUserProfile([
        {
          id: args.id,
          name: args.name,
          email: args.email,
          phone: args.phone
        }
      ]);

      const newProfile = {
        name: args.name,
        email: args.email,
        phone: args.phone
      };
      return newProfile;
    },
  },
}

