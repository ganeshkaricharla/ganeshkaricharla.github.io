import './Projects2.css';
import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { projectsData } from '../../assets/projectsData';
import ProjectCard from "./ProjectCard";
const Projects = () => {
    return (
        <div className="section-container">
            <Header heading="Recent Projects" details="I've worked on React-Js and Express-Js here are few projects I've where I've implemented my web development skills" />

            <div className="project-card-container">
                {projectsData.map((projects) => {
                    return (
                        <ProjectCard projectName={projects.projectName}
                            projectDescription={projects.projectDescription}
                            githubUrl={projects.githubUrl}
                            imageUrl={projects.imageUrl}
                            projectUrl={projects.projectUrl} />
                    );
                })}
            </div>



            <Footer link="Skills" phrase="Check out my " toad="./skills" />
        </div>
    );
};

export default Projects;