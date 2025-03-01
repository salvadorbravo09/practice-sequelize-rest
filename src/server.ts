import express from "express";
import { sequelize } from "./database/sequelize";

import userRouter from "./routes/user.route";
import postRouter from "./routes/post.route";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para usar req.body
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

const main = async () => {
  try {
    await sequelize.sync({ alter: true }); // Crea las tablas en caso de que no existan
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
