import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About/About';
import Footer from './Footer/Footer';
import Home from './Home';
import NavBar from './NavBar';
import Pricing from './PricingPage/Pricing';

const LandingPage = ({ path }: any) => {
  const pathName = window.location.pathname;

  return (
    <div className='landingPage'>
      {pathName === '/' ? '' : <NavBar />}
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/pricing' component={Magazin} /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default LandingPage;
