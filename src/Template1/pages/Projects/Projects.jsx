import PageHeading from '../../components/PageHeading/PageHeading';
import Project from '../../components/Project/Project';
import SelectProject from '../../components/SelectProject/SelectProject';
import './Projects.css';
import projects from '../../../data/projects.json';
import { useState } from 'react';
import ProjectModal from '../../modals/ProjectModal/ProjectModal';

function Projects() {
    const [projectmodalOpen, setModalOpen] = useState(false);
    const [projectid, setProjectid] = useState('');
    function showProject(projectid) {
        setModalOpen(true);
        setProjectid(projectid);
    }

    return (
        <>
            {projectmodalOpen && <ProjectModal closeModal={setModalOpen} projectid={projectid} />}
            <div className="projects-container">
                <div className="projects-header">
                    <PageHeading pageHeading="projects" />
                    <SelectProject />
                </div>
                <div className="projects-content">
                    {projects.map((project, index) => {
                        return <Project project={project} key={index} showProject={showProject} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Projects;
