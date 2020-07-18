import Knex from "knex";

export const up = async (knex: Knex) => {
  knex.schema.hasTable('userProfile').then((exists => {
    if (!exists) {
      return knex.schema.createTable('userProfile', function (table) {
        table.increments('id').primary();
        table.string('name', 100).notNullable();
        table.string('email', 100).unique().notNullable();
        table.string('phone', 15).notNullable();
        table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());;
        table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());;
      });
    }
  }));
};

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('userProfile');

}
