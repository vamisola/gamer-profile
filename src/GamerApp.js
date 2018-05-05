import React, { Component } from 'react';
import 'react-flexview/lib/flexView.css';

import './GamerApp.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import About from './components/About';
import Contact from './components/ContactUs';
import CardList from './components/Card';
import Footer from './components/Footer';
import 'react-flexview/lib/flexView.css';


class GamerApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Games />
        <About />
        <Contact />
        <CardList />
        <Footer />
      </div>
    );
  }
}

export default GamerApp;
