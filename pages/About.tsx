import React from 'react';
import AboutAUGLUG from '../components/AboutAUGLUG';
import AboutFOSS from '../components/AboutFOSS';

const About: React.FC = () => {
    return (
        <div className="pt-20">
            <AboutAUGLUG />
            <AboutFOSS />
        </div>
    );
};

export default About;
