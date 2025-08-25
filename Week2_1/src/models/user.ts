import { Model, DataTypes, Sequelize } from 'sequelize';
import type { Optional } from 'sequelize';

// interface định nghĩa các trường của User
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

// interface cho phép optional fields khi tạo user
export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'image' | 'roleId' | 'positionId' | 'createdAt' | 'updatedAt'> {}

// class User mở rộng Model
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public email!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public address!: string;
  public phoneNumber!: string;
  public gender!: boolean;
  public image?: string;
  public roleId?: string;
  public positionId?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    // Ví dụ: User.hasMany(models.Post)
  }

  // Hàm init model
  static initModel(sequelize: Sequelize): typeof User {
    User.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      phoneNumber: { type: DataTypes.STRING, allowNull: false },
      gender: { type: DataTypes.BOOLEAN, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
      roleId: { type: DataTypes.STRING, allowNull: true },
      positionId: { type: DataTypes.STRING, allowNull: true },
    }, {
      sequelize,
      modelName: 'User',
    });
    return User;
  }
}
