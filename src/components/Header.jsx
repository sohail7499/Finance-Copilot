import React from "react";
import { FiMenu, FiX, FiBell, FiUser } from "react-icons/fi";

function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <>
      <header className="flex h-20.25 w-full items-center justify-between border-b border-slate-200 bg-white px-4">
        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="text-2xl text-slate-700"
          >
            {isSidebarOpen ? "" : <FiMenu />}
          </button>

          <h1 className="text-xl font-bold text-slate-800">Finance Copilot</h1>
        </div>

        {/* Desktop */}
        <h2 className="hidden text-xl font-semibold text-slate-800 md:block">
          Good Evening, Sohail 👋
        </h2>

        {/* Right actions */}
        <div className="flex items-center gap-4 text-xl text-slate-700">
          <FiBell />
          <FiUser />
        </div>
      </header>
    </>
  );
}

export default Header;
