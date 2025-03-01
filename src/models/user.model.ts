import {
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  DataType,
  Column,
  Default,
  AllowNull,
  IsEmail,
  Unique,
  Length,
  HasMany,
} from "sequelize-typescript";
import { Post } from "./post.model";

@Table
export class User extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Length({ min: 2, max: 255 })
  @Column(DataType.STRING)
  name!: string;

  @HasMany(() => Post)
  posts!: Post[];
}
