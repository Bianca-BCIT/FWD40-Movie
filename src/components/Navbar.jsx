
import "./Navbar.css";
import { useState } from "react";
import Banner from '../images/Banner.jpg';
import '../components/Header.css';
import { Link } from 'react-router-dom';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar" >
            <h2><Link to="/">CinematicWonders</Link></h2>
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
             ☰
            </button>
            <ul className={`navbar-ul ${isOpen ? "open" : ""}`}>
                <li>
                    <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => setIsOpen(false)}> ABOUT</Link>
                </li>
                <li>
                    <Link to="/favorites" onClick={() => setIsOpen(false)}>FAVOURITES</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;