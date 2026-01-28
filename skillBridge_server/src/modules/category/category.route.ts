import { Router } from "express";
import { auth } from "../../middleware/auth";
import { authorize } from "../../middleware/authorize";
import { categoryController } from "./category.controller";
export const categoryRouter = Router();
categoryRouter.post(
  "/",
  auth,
  authorize("ADMIN"),
  categoryController.createCategoryByAdmin,
);
