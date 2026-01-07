import { Request, Response } from "express";
import { authServices } from "./auth.services";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authServices.loginUserIntoDB(
      req.body.email,
      req.body.password
    );

    return res.status(200).json({
      success: true,
      message: "users created",
      data: "",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const authController = {
  loginUser,
};
