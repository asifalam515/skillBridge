import { Router } from "express";
import { categoriesController } from "./categories.controller";

export const categoriesRoute = Router();
categoriesRoute.post("/", categoriesController.createCategory);
