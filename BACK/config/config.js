const { DB_NAME, DB_USER, DB_PASS, DB_PORT, DB_HOST, DB_DIALECT } = process.env;

module.exports = {
  development: {
    username: DB_USER || "kanbam",
    password: DB_PASS || "someStrongPass",
    database: DB_NAME || "desafio_kanbam_dev",
    host: DB_HOST || "localhost",
    port: DB_PORT || 5432,
    dialect: DB_DIALECT || "postgres",
  },
};
