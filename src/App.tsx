import { useState, useEffect } from "react";
import { fetchTrendingMovies, searchMovies } from "./services/tmdb";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import MovieModal from "./components/MovieModal";
import type { Movie } from "./types";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true); // already true on mount
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const loadTrending = async () => {
    setIsLoading(true);
    setError(null);
    const data = await fetchTrendingMovies();
    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTrendingMovies().then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    const results = await searchMovies(query);
    if (results.length === 0) {
      setError(`No results found for "${query}".`);
    }
    setMovies(results);
    setIsLoading(false);
  };

  return (
    <div className="app-container">
      <header className="app-header" onClick={loadTrending}>
        <h1>QueryCast</h1>
      </header>

      <SearchBar onSearch={handleSearch} />

      {isLoading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App;