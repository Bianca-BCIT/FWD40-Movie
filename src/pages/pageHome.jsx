import { useEffect, useState } from "react";
import "./PageHome.css";
import {getNowPlayingMovies} from "../utilities/api";

function PageHome() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    useEffect(() => {
        getNowPlayingMovies().then((data) => {
            //console.log("API Response:", data);
            setNowPlayingMovies(data.results);
        });
    }, []);

    return <div>PageHome</div>
}

export default PageHome;