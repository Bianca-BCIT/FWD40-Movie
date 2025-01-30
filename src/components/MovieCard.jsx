import { TMDB_IMAGE_BASE_URL } from "../globals/globals";
import "./MovieCard.css";
import { formatReleaseDate, formatVoteAverage } from "../utilities/toolbelt";
import { Link } from "react-router-dom";

function MovieCard({movieData}) {
    return (
        <Link to={`/movie/${movieData.id}`}>
            <div className="movie-card">
                <img src={`${TMDB_IMAGE_BASE_URL}/w300/${movieData.poster_path}`}
                alt={`${movieData.title} poster`}/>
                <div className="movie-card-info">
                    <h2 className="movie-title">{movieData.title}</h2>
                    <p className="release-date">{formatReleaseDate(movieData.release_date)}</p>
                    <p className="overview">{movieData.overview}</p>
                    <p className="vote-average">{formatVoteAverage(movieData.vote_average)}</p>
                    <button className="see-more">See More</button>
                </div>
                <button className="favorite">🩷</button>
            </div>
        </Link>
    );
}

export default MovieCard;