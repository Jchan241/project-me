import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './nav-bar';
import Banner from './banner';
import Intro from './intro';
import Footer from './footer';
import About from './about';


const App = () => {
  return (
    <Router basename="/">
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <div className="content-wrap">
              <Banner />
              <Intro />
            </div>
          </Route>
          <div className="content-wrap">
            <Route path="/about">
              <Nav />
              <About />
            </Route>
          </div>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
