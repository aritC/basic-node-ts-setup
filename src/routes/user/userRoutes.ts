import { Request, Response, Router } from "express";

const userRouter = Router();

interface User {
  id: string;
  first_name: string;
  last_name?: string;
}

const mockUser: User = { id: "1234", first_name: "Arit", last_name: "Chanda" };

userRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === "1234") {
    res.status(200).json({ message: "success", user: mockUser });
  } else {
    res.status(400).json({ message: "User Not Found" });
  }
});

userRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "success",
    count: 1,
    total: 1,
    limit: 10,
    offset: 0,
    users: [mockUser],
  });
});

export default userRouter;
