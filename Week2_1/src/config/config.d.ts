import type { Dialect } from "sequelize";
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
declare const config: SequelizeConfig;
export default config;
//# sourceMappingURL=config.d.ts.map