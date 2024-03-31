module.exports = {
  client: "mysql2",
  connection: {
    database: "cartas",
    user: "root",
    password: "1234",
  },

  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
