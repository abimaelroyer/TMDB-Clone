interface MovieProps {
  movie: any;
  onClick: () => void; // <--- New Prop
}

function MovieCard({ movie, onClick }: MovieProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    // Add onClick here so the whole card is clickable
    <div className="movie-card" onClick={onClick}> 
      <img src={imageUrl} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;