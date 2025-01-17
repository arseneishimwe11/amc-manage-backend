import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable('Users', {
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
    department: DataTypes.STRING,
    title: DataTypes.STRING,
    contact_number: DataTypes.STRING(15),
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
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleted_at: DataTypes.DATE,
  });
}
export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('Users');
}
