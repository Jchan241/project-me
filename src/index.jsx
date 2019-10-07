// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { createHistory as history } from 'history';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav-bar';
import Banner from './components/banner';
import Intro from './components/intro';
import Footer from './components/footer';
import About from './components/about';

// internal modules
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router histroy={history}>
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
  </Provider>,
  document.getElementById('root')
);
