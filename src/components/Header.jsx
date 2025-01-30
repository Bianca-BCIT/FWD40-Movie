
import Banner from '../images/Banner.png';
import '../components/Header.css';


function Header() {
    return <header>
        <img className="banner" src={Banner} alt="White Bird Backdrop" />
    </header>
}

export default Header