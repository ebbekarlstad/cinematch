import React from "react";

// Creates a header
function Header() {
	// Header buttons
	const handleUserClick = () => {
        // Redirect here
		console.log("User button clicked!");
    };
	const handleHomeClick = () => {
        console.log("Home button clicked!");
    };

	return (
		<header className = "h-28 bg-[#18191A] bg-opacity-50 shadow-lg shadow-black/10 backdrop-blur-md px-4 py-2 fixed top-0 left-0 w-full flex items-center justify-between z-50">
		<div onClick = {handleHomeClick} className = "px-6 text-white text-lg font-medium cursor-pointer select-none">CineMatch</div>
		<div onClick = {handleUserClick} className = "px-6 text-white text-lg font-medium cursor-pointer select-none">User</div>
		</header>
	);
}

export default Header;
