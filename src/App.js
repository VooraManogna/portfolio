// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Skills/>
      <Profile/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
