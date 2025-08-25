import { Model, DataTypes, Sequelize } from 'sequelize';
// class User mở rộng Model
export class User extends Model {
    id;
    email;
    password;
    firstName;
    lastName;
    address;
    phoneNumber;
    gender;
    image;
    roleId;
    positionId;
    createdAt;
    updatedAt;
    static associate(models) {
        // Ví dụ: User.hasMany(models.Post)
    }
    // Hàm init model
    static initModel(sequelize) {
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
//# sourceMappingURL=user.js.map