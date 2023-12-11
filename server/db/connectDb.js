import pg from "pg";
const { Pool } = pg;
import "dotenv/config";

export const pool = new Pool({
  user: "postgres",
  password: process.env.DB_PASS,
  host: "localhost",
  port: "5433",
  database: "updated_apttalk",
});
