//import useState
import React, { useState } from 'react'
import './App.css';
//Import ColorBlock component
import ColorBlock from './ColorBlock'
//Import ColorForm component
import ColorForm from './ColorForm'

// COLOR APP
function App() {
  // color array
  let [colors, setColors] = useState([
    'violet', 'blue', 'lightblue', 'green', 
  'greenyellow', 'yellow', 'orange', 'red'])

  // add colors
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
        {colors.map((color, i) => 
            <ColorBlock key={i} color={color} />
        )}
        <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
