import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Layout from './components/Numenera/Layout';
import './app.scss';

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}
