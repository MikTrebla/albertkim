import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Wrapper from './Components/Wrapper'
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
// import Portfolio from './Components/Pages/Portfolio';
// import Contact from './Components/Pages/Contact';
import NoMatch from './Components/Pages/NoMatch';
import "./App.css";
import './Components/Pages/Contact/Contact.css'
import './Components/Pages/Portfolio/Portfolio.css'
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Wrapper>
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home}/>
              {/* <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={Contact} /> */}
              <Route component = {NoMatch} />
            </Switch>
          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
