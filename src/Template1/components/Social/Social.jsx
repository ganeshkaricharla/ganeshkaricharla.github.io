import './Social.css';
import personal from '../../../data/personal.json';
function Social() {
    return (
        <div className="home-detail-social">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="home-social-icons fab fa-linkedin"></i>
            </a>
            <a href={personal.instagram} target="_blank" rel="noopener noreferrer">
                <i className="home-social-icons fab fa-instagram"></i>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
                <i className="home-social-icons fab fa-github"></i>
            </a>
        </div>
    );
}

export default Social;
