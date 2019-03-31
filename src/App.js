import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Layout from './components/Numenera/Layout';
// Materialize CSS
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './app.scss';

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}
