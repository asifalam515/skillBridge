import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { Request, Response } from "express";
import { auth } from "../lib/auth";
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("skillBridge project started!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
