import { useContext } from "react";
import "./PageFavorites.css";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";

function PageFavorites() {

    // retrieve our favorites from global context
    const { favorites } = useContext(GlobalContext);

    return (
        <main id="favorites">
            {/* Check if favorites list is empty */}
            <div className="favorites-container">
                {favorites.length === 0 ? (
                    <p className="no-favorites-message">You do not have any favorite movies.</p>
                ) : (
                    favorites.map((movie) => {
                        return <MovieCard key={movie.id} movieData={movie} />;
                    })
                )}
            </div>
        </main>
    );
}

export default PageFavorites;
