import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  IsUUID,
  Length,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Post extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @Length({ min: 2, max: 255 })
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
  @Length({ min: 2 })
  @Column(DataType.TEXT)
  content!: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  published!: boolean;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  userId!: string;

  @BelongsTo(() => User)
  author!: User;
}
