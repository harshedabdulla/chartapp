import React from "react";

function NavigationMenu() {
  return (
    <div className="bg-purple-600 h-screen w-44 fixed top-0 left-0 z-10">
      <div className="p-4">
        <h1 className="text-white font-bold text-xl mb-12">Dashboard</h1>
        <ul className="space-y-2">
          <li>
            <a
              href="#about"
              className="text-white hover:bg-purple-700 block px-4 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:bg-purple-700 block px-4 py-2 rounded-md text-sm font-medium"
            >
              My Projects
            </a>
          </li>
          <li>
            <a
              href="#flow"
              className="text-white hover:bg-purple-700 block px-4 py-2 rounded-md text-sm font-medium"
            >
              Project Flow
            </a>
          </li>
          <li>
            <a
              href="#covid"
              className="text-white hover:bg-purple-700 block px-4 py-2 rounded-md text-sm font-medium"
            >
              Covid Stats
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationMenu;
