import { useState, useEffect } from "react";
import { fetchTrendingMovies, searchMovies } from "./services/tmdb";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import MovieModal from "./components/MovieModal"; // <--- 1. Import Modal
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null); // <--- 2. New State

  const loadTrending = async () => {
    setIsLoading(true);
    const data = await fetchTrendingMovies();
    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadTrending();
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setIsLoading(false);
  };

  return (
    <div className="appContainer">
      <header className="app-header" onClick={loadTrending}>
        <h1>QueryCast</h1>
      </header>
      
      <SearchBar onSearch={handleSearch} />

      {isLoading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie: any) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={() => setSelectedMovie(movie)} // <--- 3. Set the movie on click
            /> 
          ))}
        </div>
      )}

      {/* 4. Show Modal ONLY if a movie is selected */}
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}

export default App;