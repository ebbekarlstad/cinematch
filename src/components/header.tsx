import React from "react";

// Creates a header
function Header() {
  return (
    <header className = "h-28 bg-[#18191A] bg-opacity-50 shadow-lg shadow-black/10 backdrop-blur-md px-4 py-2 fixed top-0 left-0 w-full flex items-center justify-between z-50">
    <div className = "px-6 text-white text-lg font-medium">CineMatch</div>
    <div className = "px-6 text-white text-lg font-medium">User</div>
    </header>
  );
}

export default Header;
