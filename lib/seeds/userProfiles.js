"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const userProfiles_1 = __importDefault(require("../seedData/userProfiles"));
async function seed(knex) {
    // Deletes ALL existing entries
    return knex("userProfile").del()
        .then(() => {
        // Inserts seed entries
        return knex("userProfile").insert(userProfiles_1.default);
    });
}
exports.seed = seed;
;
