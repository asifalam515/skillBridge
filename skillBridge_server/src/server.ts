import cors from "cors";
import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello vaiiii !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
