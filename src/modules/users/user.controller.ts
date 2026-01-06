import { Request, Response } from "express";
import { pool } from "../../database/db";
import { userServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createdUserIntoDB(req.body);

    return res.status(200).json({
      success: true,
      message: "users created",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userController = {
  createUser,
};
