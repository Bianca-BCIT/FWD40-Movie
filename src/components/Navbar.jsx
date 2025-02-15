
import "./Navbar.css";
import Banner from '../images/Banner.jpg';
import '../components/Header.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar" >
            <h2> CinematicWonders</h2>
            <ul className="navbar-ul">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about"> ABOUT</Link>
                </li>
                <li>
                    <Link to="/favorites">FAVOURITES</Link>
                </li>
            </ul>
        </nav>

    )

}

export default Navbar;