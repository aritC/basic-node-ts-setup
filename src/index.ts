import express, { Express, Request, Response } from "express";
const PORT = 3000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hi from Node TS");
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is up" });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
