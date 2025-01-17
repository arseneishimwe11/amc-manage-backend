import { Request, Response } from "express";
import { Op } from "sequelize";
import AMC from "../models/amc";

export const getAmcList = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await AMC.findAndCountAll({
      limit,
      offset,
      order: [["sort_key", "ASC"]],
    });

    res.json({
      items: rows,
      total: count,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching AMC list" });
  }
};

export const getAmcDetail = async (req: Request, res: Response) => {
  try {
    const amc = await AMC.findByPk(req.params.id);
    if (!amc) {
      return res.status(404).json({ message: "AMC not found" });
    }
    res.json(amc);
  } catch (error) {
    res.status(500).json({ message: "Error fetching AMC detail" });
  }
};

export const createAmc = async (req: Request, res: Response) => {
  try {
    const amc = await AMC.create({
      ...req.body,
      user_id: (req as any).user.id,
    });
    res.status(201).json(amc);
  } catch (error) {
    res.status(400).json({ message: "Error creating AMC" });
  }
};

export const updateAmc = async (req: Request, res: Response) => {
  try {
    const amc = await AMC.findByPk(req.params.id);
    if (!amc) {
      return res.status(404).json({ message: "AMC not found" });
    }

    await amc.update(req.body);
    res.json(amc);
  } catch (error) {
    res.status(400).json({ message: "Error updating AMC" });
  }
};
