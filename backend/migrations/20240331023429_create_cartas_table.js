exports.up = function (knex) {
    return knex.schema.createTable("cartass", function (table) {
      table.increments("id").primary();
      table.integer("numero").notNullable();
      table.string("tipo").notNullable();
      table.decimal("valorEntrada").notNullable();
      table.decimal("valorCredito").notNullable();
      table.integer("qtdParcelas").notNullable();
      table.boolean("ativo").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cartass");
  };