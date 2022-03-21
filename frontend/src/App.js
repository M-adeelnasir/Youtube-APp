import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './components/Home'
import { BrowserRouter as Router } from 'react-router-dom'
var bool = true;

function App() {
  return (
    <div className="App">
      <Router>
        <Home />

      </Router>
    </div>
  );
}

export default App;
