import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Banner from './banner';
import Intro from './intro';
import Footer from './footer';

import About from './about';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Banner />
            <Intro />
          </Route>
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
