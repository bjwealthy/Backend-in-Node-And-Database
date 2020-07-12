import * as Knex from "knex";
import userProfiles from '../seedData/userProfiles'

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return await knex("userProfile").del()
    .then(() => {
      // Inserts seed entries
      return knex("userProfile").insert(userProfiles);
    });
};
