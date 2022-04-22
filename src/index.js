import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import "./components/Home.css";
import "./components/About.css";
import "./components/Contact.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <About />
    <Home />
    <Contact />
  </React.StrictMode>
);


