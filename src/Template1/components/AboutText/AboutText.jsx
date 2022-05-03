import React from 'react';
import personal from '../../../data/personal.json';
function AboutText() {
    return <div className="home-detail-about">{personal.pitchline}</div>;
}

export default AboutText;
