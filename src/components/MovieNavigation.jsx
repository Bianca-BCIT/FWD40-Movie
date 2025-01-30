import "./MovieNavigation.css";

//copied from chatGPT
function MovieNavigation({ onTabChange}) {
    const handleClick = (tab) => {
        onTabChange(tab);
    };

    return (
        <nav className="movie-navigation">
            <button onClick={() => handleClick("nowPlaying")} className="active">Now Playing</button>
            <button onClick={() => handleClick("popular")}>Popular</button>
            <button onClick={() => handleClick("upcoming")}>Upcoming</button>
            <button onClick={() => handleClick("topRated")}>Top Rated</button>
        </nav>
    );
}

export default MovieNavigation;