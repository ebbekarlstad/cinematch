import React from "react";

// Creates a grid as the background
function Grid() {
    return (
        <div className="relative min-h-screen"
        style={{
            opacity: 1, // The grid lines will be fully opaque
            WebkitMaskImage: "linear-gradient(to bottom, transparent 20%, black 80%)",
            maskImage: "linear-gradient(to bottom, transparent 20%, black 80%)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
        }}>
        
        {/* Grid Background */}
        <div className="absolute inset-1"
        style={{
            backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 1) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 1) 2px, transparent 1px)",
            backgroundSize: "50px 50px",
            opacity: 0.05,
        }}
        ></div>
        
        {/* First Image */}
        <div className="absolute inset-0 blur-3xl"
        style={{
            backgroundImage: "url('/img/pink.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
        }}
        ></div>
        
        {/* Second Image */}
        <div className="absolute inset-0 blur-3xl h-full w-full"
        style={{
            backgroundImage: "url('/img/blue.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
        }}
        ></div>
        </div>
    );
}

export default Grid;
