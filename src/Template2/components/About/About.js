import "./About.css";
import React from 'react';
import gif from "../../assets/about_anime.gif"
import aboutVector from "../../assets/about_vector.png"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Python Developer | Cyber Security Enthusiast | Web Development'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Programmer-Python,Java</h3>
                    <p className='about-details'>
                        I'm proficient in python and java programming and have worked on few projects.{' '}<a className="about-link-element" href="https://leetcode.com/vighnesh777/" rel="noreferrer" target="_blank">check out my leetcode profile!</a></p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Cyber Security Enthusiast</h3>
                    <p className='about-details'>
                        I am interested in cybersecurity field where I have a personal ineterest on ethical hacking and I have been upskilling myself by doing a few certifications on it,and have recently learned bash scripting.{' '}
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Web-Developer</h3>
                    <p className='about-details'>
                        I'm keenly interested in the web development and application development with the MERN stack.{' '}
                        <a
                            className='about-link-element'
                            href="https://github.com/vighnesh777/" rel="noreferrer" target="_blank"
                        >
                            Checkout my github!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={gif}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footer
                phrase='Check out my '
                link='projects!'
                toad='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
