import './Template.css';
import React from 'react';
// import { HashRouter, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../Template2/components/Home/Home';
import Projects from '../../Template2/components/Projects/Projects';
import About from '../../Template2/components/About/About';
import Skills from '../../Template2/components/Skills/Skills';
import Contact from '../../Template2/components/Contact/Contact';
import Navbar from '../../Template2/components/Navbar/Navbar';
const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" exact element={<About />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/skills" exact element={<Skills />} />
                        <Route path="/contacts" exact element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;
