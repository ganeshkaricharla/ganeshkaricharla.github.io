import SingleWork from '../SIngleWork/SingleWork';
import './Work.css';
import works from '../../../data/works.json';

function Work() {
    return (
        <div className="work-container">
            <h1 className="work-header">Work Experience</h1>
            <div className="work-list">
                {works.map((work, index) => {
                    return <SingleWork key={index} data={work} />;
                })}
            </div>
        </div>
    );
}

export default Work;
