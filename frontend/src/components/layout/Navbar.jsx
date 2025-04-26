import React from "react";
import {
  FiSearch,
  FiHome,
  FiCompass,
  FiUsers,
  FiVideo,
  FiBell,
  FiMessageSquare,
} from "react-icons/fi";

function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left side - Logo and Search */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-indigo-600 mr-8">
            SkillShare
          </h1>

          {/* Search bar */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search SkillShare"
              className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-100 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Center - Navigation Icons */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <a href="/explore">
            <NavIcon active icon={<FiHome className="h-6 w-6" />} />
          </a>

          <a>
            <NavIcon icon={<FiCompass className="h-6 w-6" />} />
          </a>

          <a>
            <NavIcon icon={<FiVideo className="h-6 w-6" />} />
          </a>

          <a>
            <NavIcon icon={<FiUsers className="h-6 w-6" />} />
          </a>
        </div>

        {/* Right side - User controls */}
        <div className="flex items-center space-x-2">
          <a href="/notifications">
            <NavIcon icon={<FiBell className="h-6 w-6" />} />
          </a>
          <NavIcon icon={<FiMessageSquare className="h-6 w-6" />} />

          {/* User profile */}
          <a className="ml-2" href="/profile">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

// Reusable NavIcon component
function NavIcon({ icon, active = false }) {
  return (
    <button
      className={`p-2 md:p-3 rounded-full ${
        active
          ? "text-indigo-600 border-b-2 border-indigo-600"
          : "text-gray-500 hover:bg-gray-200"
      }`}
    >
      {icon}
    </button>
  );
}

export default Navbar;
