import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from 'sequelize';
import { User } from './user.js';
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});
// Khởi tạo model
const db = {
    sequelize,
    User: User.initModel(sequelize),
};
// nếu có model khác thì add vào đây
// User.associate(db);
export default db;
//# sourceMappingURL=index.js.map