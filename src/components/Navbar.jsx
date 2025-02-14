
import "./Header.css";
import Banner from '../images/Banner.png';
import '../components/Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return <header>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about"> About</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
        <img className="banner" src={Banner} alt="White Bird Backdrop" />
    </header>
}

export default Header;