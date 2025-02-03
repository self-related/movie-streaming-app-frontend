import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery";
import "./Trending.css";

export default function Trending() {
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(
        () => {
            fetch("/temp_trending_movies.json")
            .then((response) => response.json())
            .then((moviesObj) => setTrendingMovies(moviesObj));
        }, []
    );

    return (
        <div className="trending_page">
            <h1>Trending at this moment</h1>
            <Gallery movies={trendingMovies} />
        </div>
    );
}