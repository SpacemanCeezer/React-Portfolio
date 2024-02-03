import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />

        <Route path="/about-me" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />

        <Redirect from="/" to="/about-me" />
      </div>
    </Router>
  );
};

export default App;