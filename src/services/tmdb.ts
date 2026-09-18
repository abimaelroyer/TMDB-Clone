import axios from 'axios';
import type { Movie } from '../types';

const apiQuery = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_KEY,
  },
});

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await apiQuery.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await apiQuery.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};