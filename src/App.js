import React, { useState } from 'react';
import Tooltip from './components/Tooltip'; 
import SelectPosition from './components/SelectPosition'; 
import './components/tooltip.css'; 
import './components/selectPosition.css'; 

function App() {
  // State to store the selected position
  const [position, setPosition] = useState("left");

  // Function to handle position change
  const handlePositionChange = (newPosition) => {
    // Update the position state with the new value
    setPosition(newPosition);
  };

  return (
    <div className="App">
      {/* Render the SelectPosition component and pass the handlePositionChange function */}
      <SelectPosition onSelectPosition={handlePositionChange} />
      
      {/* Render the Tooltip component and pass the text and selected position */}
      <Tooltip text={"Thanks for Hovering! I'm a tooltip"} position={position} />
    </div>
  );
}

export default App;
