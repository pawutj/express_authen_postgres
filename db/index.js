const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://postgres:12345678@localhost:5432/node-bcrypt-sql",
});

client.connect();

module.exports = client;
