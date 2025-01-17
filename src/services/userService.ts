import User from '../models/user';
import { ResponseHandler } from '../utils/responseHandler';
import logger from '../utils/logger';

export class UserService {
  static async createUser(userData: any) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      logger.error('Error creating user:', error);
      throw error;
    }
  }

  static async findUserByEmail(email: string) {
    return User.findOne({ where: { email } });
  }

  static async updateUser(id: number, userData: any) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return user.update(userData);
  }
}
