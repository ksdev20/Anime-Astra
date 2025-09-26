import { useEffect, useState } from "react";
import "../../styles/components/Navbar/navbar-main.css";
import { Icon } from "../../icons/icons";
import { checkDark, toggleTheme } from "./functions/toggleTheme";
import { LegalItems } from "../../config/pages/config";
import clsx from "clsx";

{
  /* <a href="/all-categories/" className="nm-btn">
            All Categories
          </a> */
}

export function Navbar() {
  const [darkMode, setdarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hov, setHov] = useState({
    about: false,
  });

  useEffect(() => {
    const isDark = checkDark();
    // toggleTheme();
    setdarkMode(isDark);
  }, []);
  const toggleHover = () => setHov({ about: !hov.about });
  return (
    <header>
      <nav className="navbar">
        <button className="nav-menu-btn" onClick={() => setShowMenu(!showMenu)}>
          <Icon name="menu" color="#000000" />
        </button>
        <a href="/" className={`site-logo ${showSearch ? "hide-for-sb" : ""}`}>
          Anime Astra
        </a>
        <section
          className={clsx("nav-middle", {
            show: showMenu && !showSearch,
            hidden: showSearch && !showMenu,
          })}
        >
          <a href="/all-articles/" className="nm-btn">
            All Articles
          </a>
          <button
            className="nm-btn h-dd-btn"
            onMouseEnter={() => toggleHover()}
            onMouseLeave={() => toggleHover()}
          >
            <span>About v</span>
            <section className={`nm-hover-dd ${!hov.about ? "hid" : "show"}`}>
              <ul className="dd-main">
                {LegalItems.map((i, idx) => (
                  <li key={idx}>
                    <a href={i.link} className="dd-btn">
                      {i.text}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </button>
        </section>
        <section className={`search-bar-sec ${showSearch ? "show" : "hidden"}`}>
          <input
            id="search-bar"
            type="search"
            className="search-bar"
            placeholder="Search this site"
          />
        </section>
        <div className="nav-right">
          <button
            className="search-btn"
            onClick={() => {
              setShowSearch(!showSearch);
              document.getElementById("search-bar")?.focus();
            }}
          >
            {!showSearch ? (
              <Icon name="search" color="#000" />
            ) : (
              <Icon name="close" color="#000" />
            )}
          </button>
          <button
            className="theme-btn"
            onClick={() => {
              toggleTheme();
              setdarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <Icon name="darkmode" color="#000" />
            ) : (
              <Icon name="lightmode" color="#000" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
