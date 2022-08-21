import axios from 'axios';
import { API_ROUTES } from "shared/routes/apiroutes";

export const fetchMovies = async (limit = 6, offset = 0) => {
  const result = await axios.post(API_ROUTES.MOVIES.LIST, { limit, offset });
  return result.data;
}
