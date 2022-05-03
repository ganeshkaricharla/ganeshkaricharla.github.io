import './Map.css';
import personal from '../../../data/personal.json';
function Map() {
    return (
        <div className="contact-google-map">
            <iframe
                title="gmap"
                src={personal.MapLink}
                allowFullScreen=""
                loading="lazy"
                className="contact-gmap"
            ></iframe>
        </div>
    );
}

export default Map;
