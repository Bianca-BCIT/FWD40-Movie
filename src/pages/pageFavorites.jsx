import { useContext } from "react";
import "./PageFavorites.css";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";


function PageFavorites() {

    // retrieve our favorites from global context
    const { favorites } = useContext(GlobalContext);

    return (
        <main id="favorites">
            <Navbar />
            <h2 className="favorites-tittle"> FAVOURITES</h2>
            {/* Check if favorites list is empty */}
            <div className="favorites-container">
                {favorites.length === 0 ? (
                    <p className="no-favorites-message">Sorry you have no favourite movies.Return to the home page to add a favourite movie</p>
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
