import "./PageMovie.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById } from "../utilities/api";
import { TMDB_IMAGE_BASE_URL } from "../globals/globals";
import { formatReleaseDate, formatRuntime, formatVoteAverage } from "../utilities/toolbelt";
import FavoriteButton from "../components/FavoriteButton";

function PageMovie() {
    const [movieData, setMovieData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getMovieById(id)
            .then((data) => {
                console.log(data);
                setMovieData(data);
            })
            .catch((error) => {
                console.error("Error fetching movie by id:", error);
                alert("Error fetching movie by id");
            });
    }, [id]);

    return (
        <main id="single-movie">
            {movieData && (
                <div className="movie-container">
                    <img
                        className="movie-backdrop"
                        src={`${TMDB_IMAGE_BASE_URL}/w1280${movieData.backdrop_path}`}
                        alt={movieData.title}
                    />

                    <img
                        className="movie-poster"
                        src={`${TMDB_IMAGE_BASE_URL}/w500${movieData.poster_path}`}
                        alt={movieData.title}
                    />

                    <h2 className="page-movie-title">{movieData.title}</h2>
                    <FavoriteButton movieData={movieData} />
                    <h3 className="page-movie-release-date">{formatReleaseDate(movieData.release_date)}</h3>
                    <h3 className="page-movie-runtime">{formatRuntime(movieData.runtime)}</h3>
                    <p className="page-movie-overview">{movieData.overview}</p>
                    <p className="page-movie-rating">{formatVoteAverage(movieData.vote_average)}</p>
                    <button className="page-movie-favorite-btn">🩷</button>
                </div>
            )}
        </main>
    );
}

export default PageMovie;