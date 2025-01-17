import { QueryInterface } from 'sequelize';
import bcrypt from 'bcryptjs';

export async function up(queryInterface: QueryInterface) {
  const password = await bcrypt.hash('password123', 10);
  
  await queryInterface.bulkInsert('Users', [
    {
      type: 'A',
      status: 'A',
      first_name: 'Admin',
      last_name: 'User',
      email: 'admin@example.com',
      password,
      department: 'Administration',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      type: 'U',
      status: 'A',
      first_name: 'Regular',
      last_name: 'User',
      email: 'user@example.com',
      password,
      department: 'Operations',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('Users', {});
}
