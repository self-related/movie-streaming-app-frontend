import "./BannerTrending.css";
import HeartIcon from "../../assets/icons/heart.svg";
import { handleLikeClick } from "../../utils";

export default function BannerTrending({trendingMovie}) {
    // статическая заглушка для баннера
    const {name: movieName, image: movieImage, ...movieInfo} = trendingMovie;

    return (
        <div className="banner_trending" >
            <img src={movieImage} alt={movieName ?? ""}/>
            <div className="banner_trending__details">
                <h1 className="banner_trending__title" >{movieName}</h1>
                <p className="banner_trending__description"> {Object.values(movieInfo).join(" | ")} </p>
                <div className="banner_trending__buttons">
                    <button className="banner_trending__watch_button">Watch now</button>
                    <button className="banner_trending__like_button" onClick={handleLikeClick}> 
                        <img src={HeartIcon} height="10px"/> 
                    </button>
                </div>
            </div>
        </div>
    );
}