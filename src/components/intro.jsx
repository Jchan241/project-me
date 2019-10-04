import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Intro = () => {
  return (
    <div className="intro">
      <div className="about">
        <h2>About me</h2>
        <p>
          I'm a fullstack ruby on rails web developer based in Melbourne, Australia.<br />
          My passion is to create the best possible user experience and
          I'm constantly learning new ways to make it better.
        </p>
        <Link to="/about" className="story-link">More about me  <i className="fas fa-arrow-right"></i></Link>
      </div>
    </div>
  );
};

export default Intro;
