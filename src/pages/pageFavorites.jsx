import { useContext } from "react";
import "./PageFavorites.css";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";

function PageFavorites() {

    // retrieve our favorites from global context

    const { favorites } = useContext(GlobalContext);

    return (
        <main id="favorites">
            <h2>Favorites</h2>
            {/* map over them and display movie cards */}
            <div className="favorites-container">
                {favorites.map((movie) => {

                    return <MovieCard key={movie.id} movieData={movie} />;

                })}
            </div>

        </main>
    );

}

export default PageFavorites; 