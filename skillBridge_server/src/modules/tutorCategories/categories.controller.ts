import { Request, Response } from "express";
import { categoriesService } from "./categories.service";
const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoriesService.createCategory(req.body);
    res.status(201).json({
      success: true,
      data: category,
      message: "Category created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create category",
    });
  }
};
export const categoriesController = {
  createCategory,
};
