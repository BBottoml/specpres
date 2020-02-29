import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.component';
import DragDropTest from '.components/DragDropTest.component';

function App() {
  return (
      <div>
        <Navbar />
        <Router>

        </Router>
      </div>
  );
}

export default App;
