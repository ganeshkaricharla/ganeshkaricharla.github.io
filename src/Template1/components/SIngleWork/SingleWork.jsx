import './SingleWork.css';

function SingleWork({ data }) {
    return (
        <div className="singlework-container">
            <div className="singlework-top">
                <div className="singlework-college">
                    <div
                        className="singlework-logo"
                        style={{
                            backgroundImage: `url(${data.logo})`,
                        }}
                    ></div>
                    <div className="singlework-name-time">
                        <span className="singlework-name">{data.company}</span>
                        <span className="singlework-time">{data.role}</span>
                        <span className="singlework-time">{data.time}</span>
                    </div>
                </div>
            </div>
            <div className="singlework-middle">
                <div className="singlework-description">{data.description}</div>
            </div>
            <div className="singlework-bottom">
                <span className="singlework-projects-title">Projects</span>
                <div className="singlework-projects-list">
                    {data.projects.map((project, index) => {
                        return (
                            <div className="singlework-project" key={index}>
                                <div
                                    className="singlework-project-logo"
                                    style={{ backgroundImage: `url("${project.logo}")` }}
                                ></div>
                                <div className="singlework-project-name">{project.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SingleWork;
