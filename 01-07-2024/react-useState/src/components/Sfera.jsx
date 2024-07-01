import React from "react";

function Sfera({ size }) {
  const circleStyle = {
    transition: "transform 0.2s ease",
    transform: `scale(${size})`,
  };

  return (
    <div className="ball-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
        style={circleStyle} // Applica lo stile dinamico
      >
        {/* Definizione delle sfumature */}
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 0 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#4ecdc4", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>

        {/* Disegno della palla */}
        <circle cx="50" cy="50" r="45" fill="url(#grad)" />
      </svg>
    </div>
  );
}

export default Sfera;
