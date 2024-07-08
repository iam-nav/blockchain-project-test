// To inform next js, this is a client component
"use client";

// Import useState from 'react' library
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 2xl:max-w-[1280px] ">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src="/img/logo.svg" alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-10 items-center">
            <a href="#" className="text-white text-sm font-medium">
              Exchange
            </a>
            <a href="#" className="text-white text-sm font-medium">
              Last Transactions
            </a>
            <a href="#" className="text-white text-sm font-medium">
              Invite Friend
            </a>
            <a href="#" className="text-white text-sm font-medium">
              Notifications
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-4 items-center">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <button className="border border-[#9945FF] text-white px-4 py-2 rounded-lg">
              LOG IN
            </button>

            <button className="bg-[#9945FF] text-white px-4 py-2 rounded-lg">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-gray-800 py-2 absolute left-0 w-screen top-[82px]">
            <a href="#" className="block text-white py-2 px-10">
              Exchange
            </a>
            <a href="#" className="block text-white py-2 px-10">
              Last Transactions
            </a>
            <a href="#" className="block text-white py-2 px-10">
              Invite Friend
            </a>
            <a href="#" className="block text-white py-2 px-10">
              Notifications
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
