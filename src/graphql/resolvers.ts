import { UserProfileQueryInterface } from '../interfaces/queryInterfaces';
import { Queries } from '../endpoints/queries';

export const resolvers = {
  Query: {
    profiles: async () => {
      const profiles = await Queries.UserProfileQueries.getAllUserProfiles();
      return profiles;
    },

    profile: async (root: any, args: { id: number }) => {
      const profile = await Queries.UserProfileQueries.getUserProfileById(args.id);
      return profile;
    },
    profileEmail: async (root: any, args: { email: string }) => {
      const profile = await Queries.UserProfileQueries.getUserProfileByEmail(args.email);
      return profile;
    }
  },

  Mutation: {
    createProfile: async (root: any, payload: UserProfileQueryInterface) => {
      await Queries.UserProfileQueries.addUserProfile([
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
      const del = await Queries.UserProfileQueries.deleteUserProfileById(args.id)
      return del
    },

    deleteProfileByEmail: async (root: any, args: { email: string }) => {
      const del = await Queries
        .UserProfileQueries
        .deleteUserProfileByEmail(args.email)
      return del
    },

    editProfileById: async (root: any, args: { id: number, name: string, phone: string }) => {
      const updateProfile = await Queries
        .UserProfileQueries
        .updateUserProfileById(args.id, args.name, args.phone);

      const newUpdatedProfile = await Queries
        .UserProfileQueries
        .getUserProfileById(updateProfile[0]['id'])

      return newUpdatedProfile
    },

    editProfileByEmail: async (root: any, args: { email: string, name: string, phone: string }) => {
      const updateProfile = await Queries
        .UserProfileQueries
        .updateUserProfileByEmail(args.email, args.name, args.phone);

      const newUpdatedProfile = await Queries
        .UserProfileQueries
        .getUserProfileByEmail(updateProfile[0]['email'])

      return newUpdatedProfile
    }
  }
}
