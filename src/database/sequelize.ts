import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import { Post } from "../models/post.model";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  models: [User, Post],
});
