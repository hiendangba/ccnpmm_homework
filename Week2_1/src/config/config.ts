import type { Dialect } from "sequelize";
import dotenv from "dotenv";
dotenv.config(); // <- đảm bảo config.ts đọc env ngay khi import
interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

interface SequelizeConfig {
  development: DBConfig;
  test?: DBConfig;
  production?: DBConfig;
}

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

const config: SequelizeConfig = {
  development: {
    username: getEnvVar("DB_USER"),
    password: getEnvVar("DB_PASS"),
    database: getEnvVar("DB_NAME"),
    host: getEnvVar("DB_HOST"),
    dialect: "mysql" as Dialect,
  },
  test: {
    username: getEnvVar("DB_USER"),
    password: getEnvVar("DB_PASS"),
    database: getEnvVar("DB_NAME"),
    host: getEnvVar("DB_HOST"),
    dialect: "mysql" as Dialect,
  },
  production: {
    username: getEnvVar("DB_USER"),
    password: getEnvVar("DB_PASS"),
    database: getEnvVar("DB_NAME"),
    host: getEnvVar("DB_HOST"),
    dialect: "mysql" as Dialect,
  },
};

export default config;
