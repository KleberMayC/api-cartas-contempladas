/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cartas", (table) => {
    table.bigIncrements("id");
    table.integer("numero");
    table.string("tipo");
    table.integer("valorEntrada");
    table.integer("valorCredito");
    table.integer("qtdParcelas");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cartas");
};
