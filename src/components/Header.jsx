
import "./Header.css";
import Banner from '../images/Banner.jpg';
import '../components/Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return <header>
        <img className="banner" src={Banner} alt="White Bird Backdrop" />
        <h1>White Bird</h1>
        <p class="header-p">After being expelled from Beecher Prep for his treatment of a classmate with a facial deformity, Julian has struggled…</p>
    </header>
}

export default Header;