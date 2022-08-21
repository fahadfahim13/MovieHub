import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Category } from './Category';
import { Movie } from './Movie';

@Table({
  timestamps: false,
  tableName: 'movie_categories',
})
export class MovieCategories extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  characterName!: string;

  @ForeignKey(() => Movie)
  @Column
  movieId: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}
