import { Model, Sequelize } from 'sequelize';
import type { Optional } from 'sequelize';
export interface UserAttributes {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    gender: boolean;
    image?: string;
    roleId?: string;
    positionId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'image' | 'roleId' | 'positionId' | 'createdAt' | 'updatedAt'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    gender: boolean;
    image?: string;
    roleId?: string;
    positionId?: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    static associate(models: any): void;
    static initModel(sequelize: Sequelize): typeof User;
}
//# sourceMappingURL=user.d.ts.map