import React, { useState } from 'react';
import './tooltip.css'

const Tooltip = ({ text, position }) => {
  // State to track whether the tooltip should be visible
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        className='tooltip-container'
        onMouseEnter={() => setIsVisible(true)} // Show tooltip on mouse enter
        onMouseLeave={() => setIsVisible(false)} // Hide tooltip on mouse leave
      >
        <h1>Hover on me!</h1>

        {/* The tooltip element */}
        <div className={`tooltip ${position}`}>
          {/* Show the tooltip content only when isVisible is true */}
          {isVisible && <div>{text}</div>}
        </div>
      </div>
    </>
  );
}

export default Tooltip;
