import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class Users extends Model<Users> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  user_name: string;
}
