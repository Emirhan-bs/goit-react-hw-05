import { useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
