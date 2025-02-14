
import "./Navbar.css";
import Banner from '../images/Banner.png';
import '../components/Header.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar" >
            <h2> CinematicWonders</h2>
            <ul className="navbar-ul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about"> About</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>

    )



}

export default Navbar;