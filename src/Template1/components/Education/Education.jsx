import SingleEducation from '../SingleEducation/SingleEducation';
import './Education.css';
import colleges from '../../../data/colleges';

function Education() {
    return (
        <div className="education-container">
            <h1 className="education-header">Education</h1>
            <div className="education-list">
                {colleges.map((college, index) => {
                    return <SingleEducation key={index} data={college} />;
                })}
            </div>
        </div>
    );
}

export default Education;
