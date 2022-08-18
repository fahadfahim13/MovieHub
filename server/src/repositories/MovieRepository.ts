import { Movie } from '../models/Movie';
import { Service } from 'typedi';
import { Identifier, Op } from 'sequelize';
import { Actor } from '../models/Actor';
import { MovieActors } from '../models/MovieActors';
@Service()
export default class MovieRepository {
  createMovie = async (title: string, description: string, rating?: number): Promise<Movie> => {
    const user = Movie.build({ title, description, rating });
    return await user.save();
  };

  getAllMovies = async (): Promise<Movie[]> => {
    return await Movie.findAll();
  };

  getPaginatedMovies = async (limit: number, offset: number): Promise<Movie[]> => {
    return await Movie.findAll({ limit, offset, order: [['rating', 'DESC']] });
  };

  getMovieDetails = async (id: Identifier): Promise<Movie | null> => {
    const movie = await Movie.findByPk(id);
    return movie;
  };

  findByTitle = async (title: string): Promise<Movie[]> => {
    const result = await Movie.findAll({ where: { title: { [Op.iLike]: `%${title}%` } } });
    return result;
  };

  addActorToMovie = async(movie: Movie, actor: Actor, characterName: string) => {
    const movieResult = await movie.$add('actors', actor, { through: { characterName } });
    console.log(movieResult);
    const actorResult = await actor.$add('movies', movie, { through: { characterName } });
    console.log(actorResult);
    const result = await MovieActors.findOne({where: { movieId: movie.id }});
    return result;
  }
}
