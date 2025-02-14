import { useEffect, useState } from "react";
import "./PageHome.css";
import { getNowPlayingMovies, getPopularMovies, getUpcomingMovies, getTopRatedMovies } from "../utilities/api";
import MovieCard from "../components/MovieCard";
import MovieNavigation from "../components/MovieNavigation";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function PageHome() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [selectedTab, setSelectedTab] = useState("nowPlaying"); //selected functionality copied from chatGPT

    useEffect(() => {
        if (selectedTab === "nowPlaying") {
            getNowPlayingMovies().then((data) => {
                console.log("API Response:", data);
                setNowPlayingMovies(data.results || []);
            });
        } else if (selectedTab === "popular") {
            getPopularMovies().then((data) => {
                console.log("Popular Movies:", data);
                setPopularMovies(data.results || []);
            });
        } else if (selectedTab === "upcoming") {
            getUpcomingMovies().then((data) => {
                console.log("Upcoming Movies:", data);
                setUpcomingMovies(data.results || []);
                console.log("Upcoming Movies in State:", upcomingMovies);
            });
        } else if (selectedTab === "topRated") {
            getTopRatedMovies().then((data) => {
                console.log("Top Rated Movies:", data);
                setTopRatedMovies(data.results || []);
            });
        }
    }, [selectedTab]);

    const renderMovies = () => {
        switch (selectedTab) {
            case "nowPlaying":
                return nowPlayingMovies;
            case "popular":
                return popularMovies;
            case "upcoming":
                return upcomingMovies;
            case "topRated":
                return topRatedMovies;
            default:
                return [];
        }
    };

    return (
        <>
            <Navbar />
            <Header />
            <main id="home">
                <MovieNavigation onTabChange={setSelectedTab} />
                <section>
                    <div className="movie-cards-container">
                        {renderMovies().length > 0 ? (
                            renderMovies().map((movieData) => (
                                <MovieCard key={movieData.id} movieData={movieData} />
                            ))
                        ) : (
                            <p>No movies available at the moment.</p>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}

export default PageHome;