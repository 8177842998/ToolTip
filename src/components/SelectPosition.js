import React, { useState } from 'react';
import './selectPosition.css';

const SelectPosition = ({ onSelectPosition }) => {
  // Initialize state to store the selected position
  const [position, setPosition] = useState("left");

  // Handle the position change when the dropdown value is changed
  const handlePositionChange = (event) => {
    // Get the new position value from the dropdown
    const newPosition = event.target.value;

   
    setPosition(newPosition);

    onSelectPosition(newPosition);
  };

  return (
    <div className='positionSelector'>
      <label>Select Position</label>
      {/* Dropdown for selecting the position */}
      <select name='position' id='position' onChange={handlePositionChange} value={position}>
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
    </div>
  );
};

export default SelectPosition;
