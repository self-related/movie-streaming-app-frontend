import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery";
import "./Favorites.css"

export default function Favorites() {
    const [favoriteMovies, setFavoriteMovies] = useState(null);

    useEffect(() => {
        fetch("/temp_all_movies.json")
        .then((res) => res.json())
        .then((data) => {
            const favData = data.filter((movie) => movie.info.is_favorite);
            setFavoriteMovies(favData);
        })
    } ,[]);

    return (
        <div className="favorites_page">
            <h1>Favorites</h1>
            <Gallery movies={favoriteMovies} large />
        </div>
    );
}