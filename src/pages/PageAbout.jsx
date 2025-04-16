import './PageAbout.css'
import TmbdLogo from '../images/TMDB-logo.svg'

function PageAbout() {
    return (
        <main id="about">
            <h2 className="about-title"> About</h2>
            <p className="about-p">This movie database website allows you to find and favorite now playing, popular, upcoming, and top rated films.</p>
            <p className='about-p'>This application uses the TMDB API but is not endorsed or certified by TMDB.</p>
             <img className='tmdb-logo' src={TmbdLogo} alt="TMDB Logo" />
        </main>
    );
}

export default PageAbout;