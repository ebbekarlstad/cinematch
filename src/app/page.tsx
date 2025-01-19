import React from "react";
import Header from "@/components/header";
import Grid from "@/components/grid";

// Creates the landing page
function Landing() {
  return (
    <div className = "relative min-h-screen">
    {/* Header */}
    <Header />
    
    {/* Grid as a Background */}
    <div className = "absolute inset-0">
    <Grid />
    </div>
    
    {/* Main Content */}
    <div className = "relative min-h-screen flex flex-col items-center">
    <h1 className = "py-4 text-7xl font-extrabold mt-44">Love at First Scene</h1>
    <p className = "max-w-md text-xl text-center italic mx-auto">Discover your <span className={"font-bold"}>next favorite movie</span> in seconds with personalized recommendations across all your favorite streaming services.</p>
    </div>
    </div>
  );
}

export default Landing;
