import { Link } from "react-router-dom";
import "./NavBarTop.css";
import { useEffect, useState } from "react";
import SearchIcon from "../assets/icons/search.svg";
import BellIcon from "../assets/icons/bell.svg";

export default function NavBarTop() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // временная заглушка с данными
        setUserData({
            name: "temp user",
            image: "/default_user.svg"
        });
    },[]);

    return (
        <nav className="navbar_top">

            {/* левая часть панели */}
            <div className="navbar_top__wrapper">
                <Link className="navbar_top__link">Movies</Link>
                <Link className="navbar_top__link">Series</Link>
                <Link className="navbar_top__link">Documentaries</Link>
            </div>

            {/* правая часть панели */}
            <div className="navbar_top__wrapper navbar_top__wrapper--shrink">
                <button className="navbar_top__button"> <img src={SearchIcon} alt="search" /> </button>
                <button className="navbar_top__button"> <img src={BellIcon} alt="bell" /> </button>
                {
                    userData 
                    ? (<button className="navbar_top__button"> <img src={userData.image} alt="user image"/> {userData.name} </button>)
                    : (<Link to="/" className="navbar_top__link">Login</Link>)
                }
                
            </div>
        </nav>
    );
}