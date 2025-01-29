import { useEffect, useState } from "react";
import "./PageHome.css";
import {getNowPlayingMovies} from "../utilities/api";
import MovieCard from "../components/MovieCard";

function PageHome() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    useEffect(() => {
        getNowPlayingMovies().then((data) => {
            console.log("API Response:", data);
            setNowPlayingMovies(data.results);
        });
    }, []);

    return (
        <main id="home">
            <div className="movie-cards-container">
                {nowPlayingMovies.map((movieData) => (
                    <MovieCard key={movieData.id} movieData={movieData} />
                ))}
            </div>
        </main>
    )
}

export default PageHome;