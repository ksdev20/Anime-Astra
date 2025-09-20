import { useEffect, useState } from "react";
import "../../styles/components/Navbar/navbar-main.css";
import { Icon } from "../../icons/icons";
import { checkDark, toggleTheme } from "./functions/toggleTheme";

export function Navbar() {
  const [darkMode, setdarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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
        <button className="nav-menu-btn">
          <Icon name="menu" color="#000000" />
        </button>
        <a href="/" className="site-logo">
          Anime Astra
        </a>
        <section className={`nav-middle ${showSearch ? "hidden" : ""}`}>
          <a href="" className="nm-btn">
            All Articles
          </a>
          <a href="" className="nm-btn">
            All Categories
          </a>
          <button
            className="nm-btn h-dd-btn"
            onMouseEnter={() => toggleHover()}
            onMouseLeave={() => toggleHover()}
          >
            <span className="">About v</span>
            <section className={`nm-hover-dd ${!hov.about ? "hidden" : ""}`}>
              <ul className="dd-main">
                {["About Us", "Terms of Service", "Privary Policy", "Dmca"].map(
                  (i, idx) => (
                    <li key={idx}>
                      <a href={"/"} className="dd-btn">
                        {i}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </section>
          </button>
        </section>
        <section className={`search-bar-sec ${showSearch ? "" : "hidden"}`}>
          <input
            type="search"
            className="search-bar"
            placeholder="Search this site"
          />
        </section>
        <div className="nav-right">
          <button
            className="search-btn"
            onClick={() => setShowSearch(!showSearch)}
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
