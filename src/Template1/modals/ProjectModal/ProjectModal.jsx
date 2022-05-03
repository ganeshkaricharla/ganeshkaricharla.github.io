import './ProjectModal.css';

function ProjectModal({ closeModal, projectid }) {
    return (
        <div className="projectmodal-container">
            <button
                className="projectmodal-close-button"
                onClick={() => {
                    closeModal(false);
                }}
            >
                X
            </button>
            <div className="projectmodal-modal">
                <h1 className="projectmodal-header">Project {projectid}</h1>
                <div className="projectmodal-content">
                    <div className="projectmodal-content-tech-stack">
                        <div className="projectmodal-tech-stack">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                                alt=""
                            />
                            <span>Java Script</span>
                        </div>

                        <div className="projectmodal-tech-stack">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                alt=""
                            />
                            <span>React js</span>
                        </div>

                        <div className="projectmodal-tech-stack">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                                alt=""
                            />
                            <span>Java Script</span>
                        </div>

                        <div className="projectmodal-tech-stack">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                alt=""
                            />
                            <span>React js</span>
                        </div>

                        <div className="projectmodal-tech-stack">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1280px-MongoDB_Logo.svg.png"
                                alt=""
                            />
                            <span>MongoDB</span>
                        </div>
                    </div>
                    <div className="projectmodal-content-links">
                        <a href="www.github.com" className="projectmodal-content-link-item">
                            Repo Link
                        </a>
                        <a href="www.github.com" className="projectmodal-content-link-item">
                            Live Link
                        </a>
                    </div>
                </div>

                <div className="projectmodal-description"></div>

                <div className="projectmodal-footer">
                    <div className="projectmodal-footer-contributions"></div>
                    <div
                        className="projectmodal-footer-images"
                        style={{
                            backgroundImage: `url("https://images.unsplash.com/photo-1647601160679-b22ac0f22d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
