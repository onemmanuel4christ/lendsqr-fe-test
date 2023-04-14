import { Link } from "react-router-dom";
import SearchIcon from "../svgIcons/SearchIcon";
import DropdownSvg from "../svgIcons/DropdownSvg";
import './navbar.scss'
import NotificationSvg from "../svgIcons/NotificationSvg";


const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <div className="left">
          <Link to="/" className="left__image_link">
            <img src="/images/logo.svg" alt="" />
          </Link>
          <div className="left__search">
            <input type="text" placeholder="Search anything" />
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="right">
          <div className="right__wrapper">
            <Link to="/doc" className="link">
              Docs
            </Link>
            <div className="user">
              <NotificationSvg />
              <img src="/images/userImg.png" alt="" />
              <span>Adedeji

              <DropdownSvg />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
