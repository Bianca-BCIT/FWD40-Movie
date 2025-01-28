import { TMDB_IMAGE_BASE_URL } from "../globals/globals";
import "./MovieCard.css";

function MovieCard({movieData}) {
    return <div className="movieCard">
        <img src={`${TMDB_IMAGE_BASE_URL}${movieData.poster_path}`}
        alt={`${movieData.title} poster`}/>
        <div className="tint-backdrop"></div>
        <div className="movie-card-info">
            <h2>{movieData.title}</h2>
        </div>
    </div>
}

export default MovieCard;