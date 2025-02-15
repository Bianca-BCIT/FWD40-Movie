import "./MovieNavigation.css";
import { useState } from "react";


function MovieNavigation({ onTabChange }) {
    const [activeTab, setActiveTab] = useState("nowPlaying"); // Default active tab

    const handleClick = (tab) => {
        setActiveTab(tab); 
        onTabChange(tab);
    };

    return (
        <nav className="movie-navigation">
            <button 
                className={activeTab === "nowPlaying" ? "active" : ""} 
                onClick={() => handleClick("nowPlaying")}>
                Now Playing
            </button>
            <button 
                className={activeTab === "popular" ? "active" : ""} 
                onClick={() => handleClick("popular")}>
                Popular
            </button>
            <button 
                className={activeTab === "upcoming" ? "active" : ""} 
                onClick={() => handleClick("upcoming")}>
                Upcoming
            </button>
            <button 
                className={activeTab === "topRated" ? "active" : ""} 
                onClick={() => handleClick("topRated")}>
                Top Rated
            </button>
        </nav>
    );
}

export default MovieNavigation;