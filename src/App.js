import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NumeneraLayout from './components/Numenera/NumeneraLayout';
import './app.scss';
import M from 'materialize-css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

export default function App() {
  // Load Materialize JS on mount
  useEffect(() => {
    M.AutoInit();
    M.Modal.init(document.querySelectorAll('.modal'), {
      inDuration: 200,
      outDuration: 100,
      opacity: 0.8,
      preventScrolling:true
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <NumeneraLayout />
    </Router>
  )
}
