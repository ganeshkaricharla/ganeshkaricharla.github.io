import "./Contact.css";
import React from 'react';
import aboutVector from "../../assets/contact_anime.png"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import github from '../../assets/gh.png';
import linkedin from '../../assets/li.png';
 import insta from '../../assets/in.png';




const Contact = () => {
    return (
        <div className="section-container">
            <Header heading="Get in touch with me"  />
            <div className="Map-Container">
            <iframe className="iframe" title="Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15260.462291585995!2d81.78963724999998!3d17.0180002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1646120031391!5m2!1sen!2sin"  ></iframe>
            </div>
            <Header heading="" details="Enter Your message and send it to me via the given input fields"/>
            <div className="contact-form-container">
            
                <form className="contact-form" action="https://formspree.io/f/mayajaqa"
                    method="POST">
                    <input type="email" placeholder="Type in your email.." name='_replyto' required="" className="input-box email-input" />
                    <textarea type="text" placeholder="Your message" name='message' required="" className="input-box text-message" />
                    <button type="submit" className="contact-btn">Send Mail</button>
                </form>
            </div>


            


            <Footer link="what I do" phrase="Know about " toad="/" />
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
            <div className="final-footer">
                <div className="icons">
                    <a href="https://github.com/vighnesh777" rel="noreferrer" target="_blank">
                        <img className="imgs" alt="Error" src={github}></img>
                    </a>
                
                </div>
                <div className="iconss">
                    <a href="https://www.instagram.com/__.vighnesh__kanakala.__/" rel="noreferrer" target="_blank">
                        <img src={insta} alt="Error" className="imgs"></img>
                    </a>
                
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/vighnesh-kanakala-4ab816190/" rel="noreferrer" target="_blank">
                        <img src={linkedin} alt="Error" className="imgs"></img>
                    </a>
                
                </div>
                

            </div>
            
        </div>
    );
};

export default Contact;
