
import Banner from '../images/Banner.png';
import '../components/Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return <header>
        <nav>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/favorites">Favorites</link>
                </li>
            </ul>
        </nav>
        <img className="banner" src={Banner} alt="White Bird Backdrop" />
    </header>
}

export default Header