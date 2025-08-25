import { User as UserModel } from '../models/user.js';
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
declare const _default: {
    createNewUser: (data: IUserInput) => Promise<string>;
    getAllUser: () => Promise<UserModel[]>;
    getUserInfoById: (userId: string) => Promise<UserModel | {}>;
    updateUser: (data: IUserInput) => Promise<UserModel[]>;
    deleteUserById: (userId: string) => Promise<void>;
};
export default _default;
//# sourceMappingURL=CRUDServices.d.ts.map