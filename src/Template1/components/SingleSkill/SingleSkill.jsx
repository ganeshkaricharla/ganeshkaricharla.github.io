import './SingleSkill.css';

function SingleSkill({ skills }) {
    return (
        <div className="singleskill-container">
            <div className="singleskill-top">
                <span className="singleskill-name">{skills.name}</span>
                <span className="singleskill-perc">{skills.level}</span>
            </div>
            <div className="singleskill-bottom">
                <div className="singleskill-prot" style={{ width: `${skills.level}` }}>
                    <div className="singleskill-bar"></div>
                </div>
            </div>
        </div>
    );
}

export default SingleSkill;
