import {
  AllowNull,
  Column,
  DataType,
  Default,
  IsUUID,
  Length,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

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
}
