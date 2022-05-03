import './Home.css';
import Social from '../../components/Social/Social';
import AboutText from '../../components/AboutText/AboutText';
import MorphAvatar from '../../components/MorphAvatar/MorphAvatar';
import personal from '../../../data/personal.json';

function Home() {
    return (
        <div className="home-container">
            <div className="home-avatar">
                <MorphAvatar />
            </div>
            <div className="home-details">
                <div className="home-details-name">{personal.displayname}</div>
                <AboutText />
                <Social />
            </div>
        </div>
    );
}

export default Home;
