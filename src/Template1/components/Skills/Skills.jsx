import SingleSkill from '../SingleSkill/SingleSkill';
import './Skills.css';
import tskills from '../../../data/technicalskill.json';
import sskills from '../../../data/softskills.json';

function Skills({ title }) {
    return (
        <div className="skills-container">
            <h1 className="skills-header">{title}</h1>
            <div className="skills-list">
                {title === 'Technical Skills'
                    ? tskills.map((skill, index) => {
                          return <SingleSkill key={index} skills={skill} />;
                      })
                    : sskills.map((skill, index) => {
                          return <SingleSkill key={index} skills={skill} />;
                      })}
            </div>
        </div>
    );
}

export default Skills;
