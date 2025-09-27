import { useEffect, useState } from "react";
import "../../styles/components/Navbar/navbar-main.css";
import { Icon } from "../../icons/icons";
import { checkDark, toggleTheme } from "./functions/toggleTheme";

{
  // <a href="/all-categories/" className="nm-btn">
  //           All Categories
  //         </a>
  //   <button
  //           className="nm-btn h-dd-btn"
  //           onMouseEnter={() => toggleHover()}
  //           onMouseLeave={() => toggleHover()}
  //         >
  //           <span>About v</span>
  //           <section className={`nm-hover-dd ${!hov.about ? "hid" : "show"}`}>
  //             <ul className="dd-main">
  //               {LegalItems.map((i, idx) => (
  //                 <li key={idx}>
  //                   <a href={i.link} className="dd-btn">
  //                     {i.text}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>
  //           </section>
  //         </button>
}

export function Navbar() {
  const [darkMode, setdarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const isDark = checkDark();
    // toggleTheme();
    setdarkMode(isDark);
  }, []);
  return (
    <header>
      <nav className="navbar">
        <section className={`nav-mob-overlay ${showMenu ? "show" : "hidden"}`}>
          <a href="/all-articles/" className="nmo-btn">
            All Articles
          </a>
          <a href="/legal/about" className="nmo-btn">
            About
          </a>
        </section>
        <button className="nav-menu-btn" onClick={() => setShowMenu(!showMenu)}>
          <Icon name="menu" color="#000000" />
        </button>
        <a href="/" className={`site-logo ${showSearch ? "hide-for-sb" : ""}`}>
          Anime Astra
        </a>
        <section className={`nav-middle ${showSearch ? "hidden" : ""}`}>
          <a href="/all-articles/" className="nm-btn">
            All Articles
          </a>
          <a href="/legal/about" className="nm-btn">
            About
          </a>
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
            {!showSearch ? <Icon name="search" /> : <Icon name="close" />}
          </button>
          <button
            className="theme-btn"
            onClick={() => {
              toggleTheme();
              setdarkMode(!darkMode);
            }}
          >
            {darkMode ? <Icon name="lightmode" /> : <Icon name="darkmode" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
