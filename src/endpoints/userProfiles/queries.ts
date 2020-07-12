import knex from '../../config/knex';

export default {
  getAllUserProfiles: async () => {
    const userProfiles = await knex('userProfile');
    return userProfiles
  },
  getUserProfileId: async id => {
    return await knex('userProfile').where({ id })
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
