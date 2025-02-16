import { TMDB_IMAGE_BASE_URL } from "../globals/globals";
import "./MovieCard.css";
import { formatReleaseDate, formatVoteAverage } from "../utilities/toolbelt";
import { Link, useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function MovieCard({ movieData }) {
    const navigate = useNavigate();
    function handleLinkClick(event) {
        navigate(`/movie/${movieData.id}`);

    }   

    return (
        <div onClick={handleLinkClick} className="movie-card">
            {/* <Link to={`/movie/${movieData.id}`}> */}

            <img src={`${TMDB_IMAGE_BASE_URL}/w300/${movieData.poster_path}`}
                alt={`${movieData.title} poster`} />
            <div className="movie-card-info">
                <h2 className="movie-title">{movieData.title}</h2>
                <p className="release-date">{formatReleaseDate(movieData.release_date)}</p>
                <p className="overview">{movieData.overview}</p>
                <p className="vote-average">{formatVoteAverage(movieData.vote_average)}</p>
                <button className="see-more">See More</button>
            </div>
            <FavoriteButton movieData={movieData} />
        </div>
        // </Link >
    );
}

export default MovieCard;