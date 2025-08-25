import dotenv from "dotenv";
dotenv.config(); // <- đảm bảo config.ts đọc env ngay khi import
function getEnvVar(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not set`);
    }
    return value;
}
const config = {
    development: {
        username: getEnvVar("DB_USER"),
        password: getEnvVar("DB_PASS"),
        database: getEnvVar("DB_NAME"),
        host: getEnvVar("DB_HOST"),
        dialect: "mysql",
    },
    test: {
        username: getEnvVar("DB_USER"),
        password: getEnvVar("DB_PASS"),
        database: getEnvVar("DB_NAME"),
        host: getEnvVar("DB_HOST"),
        dialect: "mysql",
    },
    production: {
        username: getEnvVar("DB_USER"),
        password: getEnvVar("DB_PASS"),
        database: getEnvVar("DB_NAME"),
        host: getEnvVar("DB_HOST"),
        dialect: "mysql",
    },
};
export default config;
//# sourceMappingURL=config.js.map