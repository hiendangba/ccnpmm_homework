import bcrypt from 'bcryptjs';
import db from '../models/index.js';
import { User as UserModel } from '../models/user.js'; // nếu bạn có export kiểu User từ model
const salt = bcrypt.genSaltSync(10);
// hàm hash password
const hashUserPassword = async (password) => {
    try {
        const hashPassword = bcrypt.hashSync(password, salt);
        return hashPassword;
    }
    catch (e) {
        throw e;
    }
};
// hàm tạo user với tham số data
const createNewUser = async (data) => {
    try {
        const hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
            email: data.email,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address || "",
            phoneNumber: data.phoneNumber,
            gender: data.gender === '1' ? true : false,
            roleId: data.roleId
        });
        return 'OK create a new user successfully';
    }
    catch (e) {
        throw e;
    }
};
// lấy tất cả user
const getAllUser = async () => {
    try {
        const users = await db.User.findAll({ raw: true });
        return users;
    }
    catch (e) {
        throw e;
    }
};
// lấy findOne user
const getUserInfoById = async (userId) => {
    try {
        const user = await db.User.findOne({
            where: { id: userId },
            raw: true
        });
        return user || {};
    }
    catch (e) {
        throw e;
    }
};
// update user
const updateUser = async (data) => {
    try {
        const user = await db.User.findOne({ where: { id: data.id } });
        if (user) {
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.address = data.address;
            await user.save();
            const allUsers = await db.User.findAll({ raw: true });
            return allUsers;
        }
        else {
            return [];
        }
    }
    catch (e) {
        throw e;
    }
};
// xóa user
const deleteUserById = async (userId) => {
    try {
        const user = await db.User.findOne({ where: { id: userId } });
        if (user) {
            await user.destroy();
        }
    }
    catch (e) {
        throw e;
    }
};
export default {
    createNewUser,
    getAllUser,
    getUserInfoById,
    updateUser,
    deleteUserById
};
//# sourceMappingURL=CRUDServices.js.map