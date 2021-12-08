import React from 'react';
import './App.css';

import Clown from './Components/jokes'

function App() {
  return (
    <div className="App">
      <h1 className="navbar-dark bg-dark">
        Async Redux Project
      </h1>
      <h3 className=' navbar-dark bg-dark'>Jokester in the House</h3>
      <Clown />
    </div>
  );
}

export default App;