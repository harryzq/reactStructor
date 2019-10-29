import React from 'react';
import './App.css';
import Home from '../home/index.js'
function App() {
  return (
    <div className="App">
      {/* send to son */}
      <Home content={'APP'} />
    </div>
  );
}

export default App;
