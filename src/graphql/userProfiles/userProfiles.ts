import { UserProfileQueryInterface } from '../../interfaces/queryInterfaces';

import { Queries } from '../../endpoints/queries'

export const profiles = async () => {
  const profiles = await Queries.UserProfileQueries.getAllUserProfiles();
  return profiles;
}

export const profile = async (root: any, args: { id: number }) => {
  const profile = await Queries.UserProfileQueries.getUserProfileById(args.id);
  return profile;
}
export const profileEmail = async (root: any, args: { email: string }) => {
  const profile = await Queries.UserProfileQueries.getUserProfileByEmail(args.email);
  return profile;
}

export const createProfile = async (root: any, payload: UserProfileQueryInterface) => {
  await Queries.UserProfileQueries.addUserProfile([
    {
      ...payload
    }
  ]);

  const newProfile = {
    ...payload
  };
  return newProfile;
}

export const deleteProfileById = async (root: any, args: { id: number }) => {
  const del = await Queries.UserProfileQueries.deleteUserProfileById(args.id)
  return del
}

export const deleteProfileByEmail = async (root: any, args: { email: string }) => {
  const del = await Queries
    .UserProfileQueries
    .deleteUserProfileByEmail(args.email)
  return del
}

export const editProfileById = async (root: any, args: { id: number, name: string, phone: string }) => {
  const updateProfile = await Queries
    .UserProfileQueries
    .updateUserProfileById(args.id, args.name, args.phone);

  const newUpdatedProfile = await Queries
    .UserProfileQueries
    .getUserProfileById(updateProfile[0]['id'])

  return newUpdatedProfile
}

export const editProfileByEmail = async (root: any, args: { email: string, name: string, phone: string }) => {
  const updateProfile = await Queries
    .UserProfileQueries
    .updateUserProfileByEmail(args.email, args.name, args.phone);

  const newUpdatedProfile = await Queries
    .UserProfileQueries
    .getUserProfileByEmail(updateProfile[0]['email'])

  return newUpdatedProfile
}
