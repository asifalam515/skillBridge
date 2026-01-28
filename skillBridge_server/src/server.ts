import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { Request, Response } from "express";
import { auth } from "../lib/auth";
import { categoryRouter } from "./modules/category/category.route";
import { categoriesRoute } from "./modules/tutorCategories/categories.route";
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("skillBridge project started!");
});
// tutor categories route
app.use("/api/v1/tutor-categories", categoriesRoute);
// category route
app.use("/api/v1/categories", categoryRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
