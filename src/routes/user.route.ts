import { Router, Request, Response } from "express";
import { User } from "../models/user.model";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    if (!email || !name) {
      res.status(400).json({ message: "Email o name son requeridos" });
      return;
    }

    const newUser = await User.create({ email, name });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server" });
  }
});

export default userRouter;
