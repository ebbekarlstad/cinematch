"use client";
import React from "react";
import Header from "@/components/header";
import Grid from "@/components/grid";
import PosterPreview from "@/components/posterprev";
import LoginButton from "@/components/LoginLogoutButton";

// Creates the landing page
function Landing() {

    return (
        <div className = "relative min-h-screen overflow-hidden">
            {/* Header - Allows for absolute children positioning*/}
            <Header />
            
            {/* Grid as a Background */}
            <div className = "absolute inset-0">
            <Grid />
            </div>
            
            {/* Main Content - Allows for absolute children positioning*/}
            <div className = "relative min-h-screen flex flex-col items-center justify-between">
                <h1 className = "py-4 text-7xl font-extrabold mt-44">Love at First Scene</h1>
                <p className = "pb-14 max-w-xl text-xl text-center italic mx-auto">Discover your <span className={"font-bold"}>next favorite movie</span> in seconds with personalized recommendations across all your favorite streaming services.</p>
                {/* Get Started Button Component */}
                <div className="mb-16">
                    <LoginButton />
                </div>
                {/* Movie Poster Previews */}
                <div className = "h-sm:hidden bottom-0 bg-white bg-opacity-10 shadow-lg shadow-black/10 backdrop-blur-sm rounded-t-3xl w-2/3 flex justify-center">
                <PosterPreview />
                </div>
            </div>
        </div>
    );
}

export default Landing;
