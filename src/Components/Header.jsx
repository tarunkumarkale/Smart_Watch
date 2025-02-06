import { useState } from "react";  // ✅ Import useState
import { GiHamburgerMenu } from "react-icons/gi";
import { BiShapeTriangle } from "react-icons/bi";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ScrolltoAbout = (event) => {
    event.preventDefault();
    document.getElementById('abo').scrollIntoView({ behavior: 'smooth' });
  };
  const Scrolltofeature = (event) => {
    event.preventDefault();
    document.getElementById('ser').scrollIntoView({ behavior: 'smooth' });
  };
  const scrolltocontact = (event) => {
    event.preventDefault();
    document.getElementById('con').scrollIntoView({ behavior: 'smooth' });
  };


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
          <li><a href="/about" onClick={ScrolltoAbout}>About</a></li>
          <li><a href="/services"  onClick={Scrolltofeature}>feature</a></li>
          <li><a href="/contact" onClick={scrolltocontact}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
