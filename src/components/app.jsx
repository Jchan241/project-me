import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
            <div className="content-wrap">
              <Banner />
              <Intro />
            </div>
          </Route>
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
