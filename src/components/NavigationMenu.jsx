import React from "react";

function NavigationMenu() {
  return (
 
    <div className="bg-purple-600 h-screen w-48 fixed top-0 left-0 z-10">
      <div className="p-4">
        <h1 className="text-white font-bold text-xl mb-4">COVID Stats</h1>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.linkedin.com/in/harshed-abdulla/"
              className="text-white hover:bg-purple-700 block px-4 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/harshedabdulla"
              className="text-white hover:bg-purple-700 block px-4 py-2 rounded-md text-sm font-medium"
            >
              My Projects
            </a>
          </li>
          
        </ul>
      </div>

    </div>

  );
}

export default NavigationMenu;
