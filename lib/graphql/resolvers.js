"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const queries_1 = require("../endpoints/userProfiles/queries");
exports.resolvers = {
    Query: {
        profiles: async () => {
            const profiles = await queries_1.Queries.getAllUserProfiles();
            return profiles;
        },
        profile: async (root, args) => {
            const profile = await queries_1.Queries.getUserProfileById(args.id);
            return profile;
        },
        profileEmail: async (root, args) => {
            const profile = await queries_1.Queries.getUserProfileByEmail(args.email);
            return profile;
        }
    },
    Mutation: {
        createProfile: async (root, payload) => {
            await queries_1.Queries.addUserProfile([
                Object.assign({}, payload)
            ]);
            const newProfile = Object.assign({}, payload);
            return newProfile;
        },
        deleteProfileById: async (root, args) => {
            const del = await queries_1.Queries.deleteUserProfileById(args.id);
            return del;
        },
        deleteProfileByEmail: async (root, args) => {
            const del = await queries_1.Queries.deleteUserProfileByEmail(args.email);
            return del;
        },
        editProfileById: async (root, args) => {
            const updateProfile = await queries_1.Queries.updateUserProfileById(args.id, args.name, args.phone);
            const newUpdatedProfile = await queries_1.Queries.getUserProfileById(updateProfile[0]['id']);
            return newUpdatedProfile;
        },
        editProfileByEmail: async (root, args) => {
            const updateProfile = await queries_1.Queries.updateUserProfileByEmail(args.email, args.name, args.phone);
            const newUpdatedProfile = await queries_1.Queries.getUserProfileById(updateProfile[0]['id']);
            return newUpdatedProfile;
        }
    }
};
