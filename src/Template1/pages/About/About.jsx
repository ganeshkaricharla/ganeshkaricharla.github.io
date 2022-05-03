import { useState } from 'react';
import AboutItems from '../../components/AboutItems/AboutItems';
import AboutModal from '../../modals/AboutModal/AboutModal';
import AboutText from '../../components/AboutText/AboutText';
import './About.css';
import personal from '../../../data/personal.json';

function About() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {modalOpen && <AboutModal closeModal={setModalOpen} />}
            <div className="about-container">
                <div className="about-image-container">
                    <img
                        src="https://images.unsplash.com/photo-1551129455-7d7ada16936c"
                        alt=""
                        className="about-image"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-details-name">
                        {personal.displayname} & {personal.role}
                    </div>
                    <div className="about-details-extra">
                        <div className="about-details-extra-left">
                            <AboutText />
                            <button
                                className="about-detail-learn"
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            >
                                Learn more
                            </button>
                        </div>
                        <div className="about-details-extra-right">
                            <AboutItems />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
