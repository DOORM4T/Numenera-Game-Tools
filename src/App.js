import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import NumeneraLayout from './components/Numenera/NumeneraLayout';
import './app.scss';


export default function App() {
  return (
    <Router>
      <Navbar />
      <NumeneraLayout />
    </Router>
  )
}
