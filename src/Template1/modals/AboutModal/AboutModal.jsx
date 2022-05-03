import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Work from '../../components/Work/Work';
import './AboutModal.css';

function AboutModal({ closeModal }) {
    return (
        <div className="aboutmodal-container">
            <button className="aboutmodal-close" onClick={() => closeModal(false)}>
                X
            </button>
            <div className="aboutmodal-modal">
                <div className="aboutmodal-experiences">
                    <div className="aboutmodal-skill">
                        <Skills title="Technical Skills" />
                        <Skills title="Soft Skills" />
                    </div>
                    <Work />
                    <Education />
                </div>
            </div>
        </div>
    );
}

export default AboutModal;
