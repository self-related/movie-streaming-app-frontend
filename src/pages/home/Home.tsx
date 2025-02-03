import BannerTrending from "./BannerTrending";
import "./Home.css";
import BannerImage from "../../assets/banner.svg";
import { useState } from "react";
import { useEffect } from "react";
import Gallery from "../../components/Gallery";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Home() {
    // временная заглушка на баннер
    const trendingMovie = {
        name: "Insider",
        image: BannerImage,
        year: 2022,
        genre: "Comedy horror",
        season: "Season 1"
    }

    const [trendingMovies, setTrendingMovies] = useState(null);
    const [continueMovies, setContinueMovies] = useState(null);

    const [cookies] = useCookies([]);
    const navigate = useNavigate();


    useEffect(() => {
        if (cookies.first_visit !== false) {
            navigate("/welcome");
            return;
        }
    
        
        fetch("/temp_trending_movies.json")
        .then(res => res.json())
        .then(data => setTrendingMovies(data));

        fetch("/temp_continue_movies.json")
        .then(res => res.json())
        .then(data => setContinueMovies(data));


    }, []);

    
    return (
        <div className="home_wrapper">
            <BannerTrending trendingMovie={trendingMovie} />
            <div className="trending_block">
                <h2>Trending</h2>
                <Gallery movies={trendingMovies} />
            </div>
            <div className="continue_block">
                <h2>Continue watching</h2>
                <Gallery movies={continueMovies} large />
            </div>
        </div>
    );
}