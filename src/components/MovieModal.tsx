import type { Movie } from "../types";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const FALLBACK_POSTER = "https://placehold.co/500x750?text=No+Poster";

function MovieModal({ movie, onClose }: MovieModalProps) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : FALLBACK_POSTER;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <img src={imageUrl} alt={movie.title} />
          <div className="modal-info">
            <h2>{movie.title}</h2>
            <p className="modal-date">{movie.release_date?.split("-")[0]}</p>
            <p className="modal-rating">⭐ {movie.vote_average?.toFixed(1)}/10</p>
            <h3>Overview</h3>
            <p className="modal-overview">{movie.overview || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;