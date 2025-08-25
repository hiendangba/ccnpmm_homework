import bcrypt from 'bcryptjs';
import db from '../models/index.js';
import { User as UserModel } from '../models/user.js'; // nếu bạn có export kiểu User từ model
import type { Type } from 'typescript'; 
import type { WhereOptions } from 'sequelize';

const salt = bcrypt.genSaltSync(10);

// interface cho dữ liệu user đầu vào
interface IUserInput {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    gender: string;
    roleId: string;
}

// hàm hash password
const hashUserPassword = async (password: string): Promise<string> => {
    try {
        const hashPassword = bcrypt.hashSync(password, salt);
        return hashPassword;
    } catch (e) {
        throw e;
    }
}

// hàm tạo user với tham số data
const createNewUser = async (data: IUserInput): Promise<string> => {
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
    } catch (e) {
        throw e;
    }
}

// lấy tất cả user
const getAllUser = async (): Promise<UserModel[]> => {
    try {
        const users = await db.User.findAll({ raw: true });
        return users;
    } catch (e) {
        throw e;
    }
}

// lấy findOne user
const getUserInfoById = async (userId: string): Promise<UserModel | {}> => {
    try {
        const user = await db.User.findOne({
            where: { id: userId },
            raw: true
        });
        return user || {};
    } catch (e) {
        throw e;
    }
}

// update user
const updateUser = async (data: IUserInput): Promise<UserModel[]> => {
    try {
        const user = await db.User.findOne({ where: { id: data.id } });
        if (user) {
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.address = data.address;
            await user.save();
            const allUsers = await db.User.findAll({ raw: true });
            return allUsers;
        } else {
            return [];
        }
    } catch (e) {
        throw e;
    }
}

// xóa user
const deleteUserById = async (userId: string): Promise<void> => {
    try {
        const user = await db.User.findOne({ where: { id: userId } });
        if (user) {
            await user.destroy();
        }
    } catch (e) {
        throw e;
    }
}

export default {
    createNewUser,
    getAllUser,
    getUserInfoById,
    updateUser,
    deleteUserById
};
