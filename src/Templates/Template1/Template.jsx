import './Template.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../Template1/pages/Home/Home';
import About from '../../Template1/pages/About/About';
import Contact from '../../Template1/pages/Contact/Contact';
import Projects from '../../Template1/pages/Projects/Projects';
import SideBar from '../../Template1/components/SideBar/SideBar';
import TopBar from '../../Template1/components/TopBar/TopBar';

function Template() {
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => {
        setSideBar(!sideBar);
    };

    return (
        <div className="app-container">
            <div className="app-nav">
                <TopBar show={sideBar} showSideBar={showSideBar} />
            </div>
            <div className="app-main">
                <Router>
                    {sideBar && <SideBar close={setSideBar} />}
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="about" element={<About />} />
                        <Route exact path="contact" element={<Contact />} />
                        <Route exact path="projects" element={<Projects />} />
                        <Route exact path="projects/:projectid" element={<Projects />} />
                        <Route exact path="*" element={<div className="errorpage">404</div>} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default Template;
