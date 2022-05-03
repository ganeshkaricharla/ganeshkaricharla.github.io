import { Link } from 'react-router-dom';
import './Project.css';
import { useState } from 'react';

function Project({ project, showProject }) {
    return (
        <div className="project-content-item">
            <div
                className="project-card"
                style={{
                    backgroundImage: `url(${project.imageURL})`,
                }}
            >
                <div className="project-card-overlay">
                    <h1 className="project-card-overlay-title">{project.title}</h1>
                    <p className="project-card-overlay-content">{project.content}</p>
                    <button
                        className="project-card-readme-button"
                        onClick={() => {
                            showProject(project.id);
                        }}
                    >
                        Readmore
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;
