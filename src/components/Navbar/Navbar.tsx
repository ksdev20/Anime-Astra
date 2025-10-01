import { useEffect, useState } from "react";
import "../../styles/components/Navbar/navbar-main.css";
import '../../styles/components/individuals/category-section.css';
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
  const [query, setQuery] = useState("");

  useEffect(() => {
    const isDark = checkDark();
    // toggleTheme();
    setdarkMode(isDark);
  }, []);
  return (
    <header>
      <nav aria-label="Site's top Navbar" className="navbar">
        <aside
          aria-label="Sidebar for Mobiles"
          className={`nav-mob-overlay ${showMenu ? "show" : "hidden"}`}
        >
          <nav>
            <a href="/all-articles/" className="nmo-btn">
              All Articles
            </a>
            <a href="/legal/about" className="nmo-btn">
              About
            </a>
          </nav>
        </aside>
        <button
          aria-label="Menu Button For Mobiles"
          className="nav-menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Icon name="menu" color="#000000" />
        </button>
        <a
          aria-label="Link to Homepage"
          href="/"
          className={`site-logo ${showSearch ? "hide-for-sb" : ""}`}
        >
          <img
            src="/ico6.webp"
            alt="Site's Icon"
            className="site-icon"
            loading="eager"
            decoding="async"
          />
          <span aria-label="Company Name">Anime Astra</span>
        </a>
        <section
          aria-label="Navigation to Pages"
          className={`nav-middle ${showSearch ? "hidden" : ""}`}
        >
          <a href="/all-articles/" className="nm-btn">
            All Articles
          </a>
          <a href="/legal/about" className="nm-btn">
            About
          </a>
        </section>
        <form
          aria-label="Search section"
          className={`search-bar-sec ${showSearch ? "show" : "hidden"}`}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `/search?q=${query}`;
          }}
        >
          <input
            aria-label="Search Input field"
            id="search-bar"
            type="search"
            className="search-bar"
            placeholder="Search this site"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="category-span ml-5 cp" onClick={() => window.location.href = `/search?q=${query}`}>Submit</button>
        </form>
        <div className="nav-right">
          <button
            aria-label="Toggles Search Bar"
            className="search-btn"
            onClick={() => {
              setShowSearch(!showSearch);
              document.getElementById("search-bar")?.focus();
            }}
          >
            {!showSearch ? <Icon name="search" /> : <Icon name="close" />}
          </button>
          <button
            aria-label="Toggles Theme between dark and light mode"
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
