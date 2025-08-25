import { Sequelize } from 'sequelize';
import { User } from './user.js';
declare const db: {
    sequelize: Sequelize;
    User: typeof User;
};
export default db;
export type DBType = typeof db;
//# sourceMappingURL=index.d.ts.map