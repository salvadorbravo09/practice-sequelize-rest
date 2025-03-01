import { Router } from "express";
import { Post } from "../models/post.model";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

postRouter.post("/", async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    if (!title) {
      res.status(400).json({ message: "Title es requerido" });
      return;
    }

    if (!content) {
      res.status(400).json({ message: "Title es requerido" });
      return;
    }

    if (!userId) {
      res.status(400).json({ message: "userId es requerido" });
      return;
    }

    const newPost = await Post.create({ title, content, userId });
    res.status(201).json(newPost);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

export default postRouter;
