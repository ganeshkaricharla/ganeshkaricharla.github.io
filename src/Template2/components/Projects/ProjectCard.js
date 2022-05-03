import React from 'react';

import './Projects2.css';
const ProjectCard = ({ projectName, projectDescription, imageUrl, githubUrl, projectUrl }) => {
    return (
        <div className="project-card">
            {/* <div className="image-container">
                <a href={projectUrl} className="external-link">
                    <img src={imageUrl} alt='images' className="project-image" />
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                <a href={githubUrl} className="project-link">
                    Visit Repo!
                </a>
            </div> */}
            <div className ="container">
                <div className ="card">
                    <div className = "image">
                        <div>
                            <a href ={projectUrl}>
                            <img  alt="Error" src = {imageUrl}/>
                            </a>  
                        </div>
                        <div>
                             <h3 className='singleHeading'>{projectName}</h3>
                        </div>
                        
                    </div>
                    
                    <div className ="content">
                        
                        <h3>{projectName}</h3>
                        <p>{projectDescription}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};
export default ProjectCard;