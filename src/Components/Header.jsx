import { useState } from "react";  // ✅ Import useState
import { GiHamburgerMenu } from "react-icons/gi";
import { BiShapeTriangle } from "react-icons/bi";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo"><BiShapeTriangle/>JustWatch </div>

      {/* ✅ Hamburger Menu Button */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </button>

      {/* ✅ Navigation Links */}
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
