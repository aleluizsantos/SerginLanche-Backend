exports.up = async function (knex) {
  return knex.schema.createTable("typeAdditional", (table) => {
    table.increments("id").primary();
    table.string("description");
    table.boolean("manySelected");
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTable("typeAdditional");
};
