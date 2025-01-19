import React from "react";

// Creates a grid as the background
function Grid() {
    return (
        <div className = "relative min-h-screen"
        style={{
            opacity: 1, // The grid lines will be fully opaque
            WebkitMaskImage: "linear-gradient(to bottom, transparent 20%, black 80%)",
            maskImage: "linear-gradient(to bottom, transparent 20%, black 80%)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
        }}
        ><div className = "absolute inset-1"
        style = {{
            backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 1) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 1) 2px, transparent 1px)",
            backgroundSize: "50px 50px",
            opacity: 0.05,
        }}
        ></div>
        <div className="absolute inset-0 blur-3xl"
        // First image
        style = {{
            backgroundImage: "url('/img/pink.png')",
            backgroundSize: "cover",
            left: "20%",
            backgroundPosition: "center",
            opacity: 0.2, // Adjust transparency
        }}
        ></div>
        
        <div className="absolute inset-0 blur-3xl h-full w-full"
        // Second image
        style = {{
            backgroundImage: "url('/img/blue.png')",
            backgroundSize: "cover",
            left: "-10%",
            backgroundPosition: "center",
            opacity: 0.2, // Adjust transparency
        }}
        ></div>
        </div>
    );
}

export default Grid;
