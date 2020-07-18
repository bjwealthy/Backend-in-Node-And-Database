"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queries = void 0;
const knex_1 = __importDefault(require("../../config/knex"));
exports.Queries = {
    getAllUserProfiles: async () => {
        const userProfiles = await knex_1.default('userProfile');
        return userProfiles;
    },
    getUserProfileById: async (id) => {
        const userProfile = await knex_1.default('userProfile').where({ id }).first();
        return userProfile;
    },
    getUserProfileByEmail: async (email) => {
        const userProfile = await knex_1.default('userProfile').where({ email }).first();
        return userProfile;
    },
    addUserProfile: async (userProfile) => {
        return await knex_1.default('userProfile').insert(userProfile).returning('*');
    },
    deleteUserProfileById: async (id) => {
        return await knex_1.default('userProfile').where({ id }).del().returning('*');
    },
    deleteUserProfileByEmail: async (email) => {
        return await knex_1.default('userProfile').where({ email }).del().returning('*');
    },
    updateUserProfileById: async (id, name, phone) => {
        return await knex_1.default('userProfile').where({ id }).update({ name, phone }, ['*']);
    },
    updateUserProfileByEmail: async (email, name, phone) => {
        return await knex_1.default('userProfile').where({ email }).update({ name, phone }, ['*']);
    }
};
