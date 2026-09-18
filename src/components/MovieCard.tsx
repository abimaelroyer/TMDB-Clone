import type { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const FALLBACK_POSTER = "https://placehold.co/500x750?text=No+Poster";

function MovieCard({ movie, onClick }: MovieCardProps) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : FALLBACK_POSTER;

  return (
    <div className="movie-card" onClick={onClick}>
      <img src={imageUrl} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0] || "Unknown"}</p>
      </div>
    </div>
  );
}

export default MovieCard;