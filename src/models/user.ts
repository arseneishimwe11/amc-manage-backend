import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import bcrypt from 'bcryptjs';

class User extends Model {
  public id!: number;
  public type!: 'U' | 'A';
  public status!: 'A' | 'P' | 'C';
  public first_name!: string;
  public last_name!: string;
  public department!: string;
  public title!: string;
  public contact_number!: string;
  public email!: string;
  public password!: string;
  public force_new_password!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('U', 'A'),
      defaultValue: 'U',
    },
    status: {
      type: DataTypes.ENUM('A', 'P', 'C'),
      defaultValue: 'A',
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    contact_number: {
      type: DataTypes.STRING(15),
    },
    email: {
      type: DataTypes.STRING(320),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    force_new_password: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'User',
    paranoid: true,
    hooks: {
      beforeCreate: async (user: User) => {
        user.password = await bcrypt.hash(user.password, 10);
      },
      beforeUpdate: async (user: User) => {
        if (user.changed('password')) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
    },
  }
);
export default User;
