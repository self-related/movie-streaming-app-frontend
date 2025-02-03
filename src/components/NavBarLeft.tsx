import { Link } from "react-router-dom";
import "./NavBarLeft.css";
import HomeIcon from "../assets/icons/home.svg";
import FavoritesIcon from "../assets/icons/favorites.svg";
import TrendingIcon from "../assets/icons/trending.svg";
import ComingSoonIcon from "../assets/icons/coming-soon.svg";
import CommunityIcon from "../assets/icons/community.svg";
import SocialIcon from "../assets/icons/social.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import LogoutIcon from "../assets/icons/logout.svg";

export default function NavBarLeft() {

    return (
        <nav className="navbar_left">
            <Link to="/welcome" className="navbar_left__logo" title="Watch movies for money :)"> <img src="/logo.svg" alt="logo" height={22}/> WATCH</Link>
            <Link to="/" className="navbar_left__link"> <img src={HomeIcon} /> Home</Link>
            <Link to="/favorites" className="navbar_left__link"> <img src={FavoritesIcon} /> Favorites</Link>
            <Link to="/trending" className="navbar_left__link"> <img src={TrendingIcon} /> Trending</Link>
            <Link to="/" className="navbar_left__link"> <img src={ComingSoonIcon} /> Coming Soon</Link>

            <div className="navbar_left__wrapper_div">
                <Link to="/" className="navbar_left__link"> <img src={CommunityIcon}  /> Community</Link>
                <Link to="/" className="navbar_left__link"> <img src={SocialIcon} /> Social</Link>
            </div>

            <div className="navbar_left__wrapper_div">
                <Link to="/" className="navbar_left__link"> <img src={SettingsIcon} /> Settings</Link>
                <Link to="/" className="navbar_left__link"> <img src={LogoutIcon} /> Logout</Link>
            </div>
        </nav>
    );
}