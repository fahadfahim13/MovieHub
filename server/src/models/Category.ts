import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'categories',
})
export class Category extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
