import React, { useEffect, useState } from "react";
import "./Header.css"; // Assuming you have a CSS file for styling
import MegaMenu from "./MegaMenu";
import SwitchTheme from "../themeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    // Close the mega menu when the user clicks outside or scrolls
    const closeMenuOnClick = (e) => {
      if (active && e.target.closest(".nav") === null) {
        setActive(false);
      }
    };

    const closeMenuOnScroll = () => {
      if (active && window.scrollY > 100) {
        setActive(false);
      }
    };

    document.addEventListener("click", closeMenuOnClick);
    document.addEventListener("scroll", closeMenuOnScroll);

    return () => {
      document.removeEventListener("click", closeMenuOnClick);
      document.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, [active]);

  return (
    <div className="header" id="header">
      <div className="container">
        <Link to="/" className="logo">
          Khaled
        </Link>
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a
              className="nav"
              href="#0"
              onClick={(e) => {
                e.preventDefault();
                setActive(!active);
              }}
            >
              Other Links
            </a>
            {/* Start Megamenu */}
            <MegaMenu active={active} setActive={setActive} />
            {/* End Megamenu */}
          </li>
        </ul>
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Header;
