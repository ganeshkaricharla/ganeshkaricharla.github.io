import "./Skills.css";
import React from 'react';
import skills from '../../assets/skills_vector.png';
import Header from '../Header/Header'
import { skillList } from '../../assets/skillsData';
import Footer from '../Footer/Footer';
import Skillcard from '../Skills/Skillcard';


const Skills = () => {
    return (
        <div className="section-container">
            <Header heading="My Skills" details="During my academic years I've worked on quite a few projects and developed my skills meanwhile." />

            <div className="skill-card-container">
                {
                    skillList.map(({ skillName, skillUrl }) => {
                        return (< Skillcard skillName={skillName} skillUrl={skillUrl} />
                        );
                    })
                }
            </div>


            <Footer link="to me." phrase="Reach out " toad="/contacts" />
            <div className="skills-vector-frame">
                <img className="skills-vector" src={skills} alt="skills" />
            </div>
        </div>
    );
};

export default Skills;