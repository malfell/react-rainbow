//import useState
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
//Import ColorBlock component
import ColorBlock from './ColorBlock'

// COLOR APP
function App() {
  // hardcoded colors
  let colors = ['violet', 'blue', 'lightblue', 'green', 
  'greenyellow', 'yellow', 'orange', 'red']
  // maps the colors
  
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App">
        {colors.map((color, i) => 
            <ColorBlock key={i} color={color} />
        )}

    </div>
  );
}

export default App;
