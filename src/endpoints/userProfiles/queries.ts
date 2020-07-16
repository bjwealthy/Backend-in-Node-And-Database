import knex from '../../config/knex';

export const Queries = {
  getAllUserProfiles: async () => {
    const userProfiles = await knex('userProfile');
    return userProfiles
  },
  getUserProfileById: async (id: number) => {
    const userProfile = await knex('userProfile').where({ id }).first();
    return userProfile;
  },
  getUserProfileByEmail: async (email: string) => {
    const userProfile = await knex('userProfile').where({ email }).first();
    return userProfile;
  },

  addUserProfile: async userProfile => {
    return await knex('userProfile').insert(userProfile).returning('*')
  },
  deleteUserProfileById: async id => {
    return await knex('userProfile').where({ id }).del().returning('*');
  },
  updateUserProfileById: async id => {
    return await knex('userProfile').where({ id }).update({})
  }
}
