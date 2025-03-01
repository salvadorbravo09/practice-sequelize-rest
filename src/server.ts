import express from "express";
import { sequelize } from "./database/sequelize";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

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
