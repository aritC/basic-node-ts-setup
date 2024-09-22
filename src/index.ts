import express, { Express, Request, Response } from "express";
const PORT = 3000;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is up" });
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is up" });
});

import { userRoutes } from "./routes/index";
app.use("/api/users", userRoutes);

app.get("/*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Invalid Url" });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
