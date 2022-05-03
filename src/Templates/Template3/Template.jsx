import React, { useState, useEffect } from 'react';
import Preloader from '../../Template3/components/Pre';
import Navbar from '../../Template3/components/Navbar';
import Home from '../../Template3/components/Home/Home';
import About from '../../Template3/components/About/About';
import Projects from '../../Template3/components/Projects/Projects';
import Footer from '../../Template3/components/Footer';
import Resume from '../../Template3/components/Resume/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Template.css';

import ScrollToTop from '../../Template3/components/ScrollToTop';

function Template() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? 'no-scroll' : 'scroll'}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default Template;
