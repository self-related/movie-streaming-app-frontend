import { useEffect, useState } from "react";
import "./Gallery.css";
import HeartIcon from "../assets/icons/heart.svg";
import { getDurationString, getShortDescription } from "../utils";


export default function Gallery({movies, large}) {
    const thumbnailType = large ? "large" : "compact"; // аттрибут для широких/узких превью
    
    const [detailedInfo, setDetailedInfo] = useState(null);
  
    const handleThumbnailClick = (id, image, info) => (event) => {

        // закрыть инфоблок, если повторный клик
        if (id === detailedInfo?.id) {
            setDetailedInfo(null);
            return;
        }

        setDetailedInfo({
            id,
            image,
            info,
            detailedDescription: "TEST",
            element: event.target // чтобы использовать в useEffect
        });
    };

    const handleCloseDetailedPreview = () => {
        setDetailedInfo(null);
    };
    // эффект - прокрутить до выбранного превью
    useEffect(() => {
        if (detailedInfo === null) {
            return;
        }

        // получить координаты картинки превью
        const coords = detailedInfo.element.getBoundingClientRect();

        // проскроллить до верхушки превью
        scrollBy({
            top: coords.top,
            behavior: "smooth"
        });

    }, [detailedInfo]);

    const moviesList = movies?.map(({image, info, id}, index) => (
        <div className={`thumbnail thumbnail--${thumbnailType}`} key={index} onClick={handleThumbnailClick(id, image, info)}>
            <img src={image} alt={info.name} className="thumbnail__image" />
            <div className="thumbnail__info">
                <h3>{info.name}</h3>
                <p>{info.year} | {info.genre}</p>
            </div>
        </div>
    ));

    return (
        <>
            <div className="gallery">
                {moviesList ?? "Loading..."}
            </div>
                {
                    /* ифноблок по клику на превью */
                    detailedInfo
                    ? (
                        <div className="detailed_info" style={{height: window.innerHeight - 271}} >
                            <button className="detailed_info__close_button" onClick={handleCloseDetailedPreview}>x</button>
                            <div className="detailed_info__image_block">
                                <img src={`${detailedInfo?.image}`} alt={detailedInfo?.info?.name} />
                            </div>

                            <div className="detailed_info__text_block">

                                <div className="detailed_info__header">
                                    <h3>{detailedInfo?.info?.name}</h3> 
                                    <p><span>★</span>{detailedInfo?.info?.rating}/10</p>
                                </div>

                                <p className="detailed_info__metadata">
                                    <span>{detailedInfo?.info?.year}</span> 
                                    <span>{detailedInfo?.info?.genre}</span> 
                                    <span>{getDurationString(detailedInfo?.info?.duration)}</span>
                                </p>

                                {/* тут описание фильма */}
                                <p>{getShortDescription(detailedInfo?.info?.description)}</p>
                                <button className="detailed_info__watch_button">Watch now</button>
                                <button className="detailed_info__like_button"> <img src={HeartIcon} height="10px"/> </button>

                            </div>
                        </div>
                    )  
                    : ""
                }
        </>
    );
}