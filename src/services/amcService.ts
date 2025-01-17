import AMC from "../models/amc";
import { getPaginationOptions, createPaginatedResponse } from "../utils/pagination";
import logger from "../utils/logger";

export class AMCService {
  static async listAMC(query: any) {
    const { page, limit } = getPaginationOptions(query);
    const offset = (page - 1) * limit;

    try {
      const { count, rows } = await AMC.findAndCountAll({
        limit,
        offset,
        order: [["sort_key", "ASC"]],
      });

      return createPaginatedResponse(rows, count, { page, limit });
    } catch (error) {
      logger.error("Error listing AMC:", error);
      throw error;
    }
  }

  static async createAMC(data: any) {
    try {
      return await AMC.create(data);
    } catch (error) {
      logger.error("Error creating AMC:", error);
      throw error;
    }
  }
}
