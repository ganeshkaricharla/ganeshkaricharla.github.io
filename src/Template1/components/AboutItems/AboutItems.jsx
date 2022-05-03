import './AboutItems.css';
import AboutItem from '../AboutItem/AboutItem';
import personal from '../../../data/personal.json';
function AboutItems() {
    const age = new Date().getFullYear() - personal.birthday.split('.')[2] - 1;
    return (
        <div className="about-detail-items">
            <AboutItem ikey={'birthday'} value={personal.birthday} />
            <AboutItem ikey={'age'} value={age + ' Years'} />
            <AboutItem ikey={'address'} value={personal.Address} />
            <AboutItem ikey={'email'} value={personal.email} />
            <AboutItem ikey={'phone'} value={personal.phone} />
            <AboutItem ikey={'study'} value={personal.Study} />
        </div>
    );
}

export default AboutItems;
