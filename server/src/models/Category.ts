import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Movie } from './Movie';
import { MovieCategories } from './MovieCategory';

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

  @BelongsToMany(() => Movie, () => MovieCategories)
  movies: Movie[]
}
