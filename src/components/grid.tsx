import React from "react";

// Creates a grid as the background
function Grid() {
    return (
      <div
        className = "absolute inset-0"
        style = {{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 1) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 1) 2px, transparent 1px)",
          backgroundSize: "6vmin 6vmin",
          opacity: 0.05,
        }}
      ></div>
    );
}

export default Grid;
  