import React, { useState } from 'react'
import { CiDumbbell } from "react-icons/ci";
import useTheme from '../context/themeContext';
import Container from './Container';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {themeMode, changeTheme} = useTheme();

  const onThemeChange = (e) => {
    const themeStatus = e.currentTarget.checked ? "dark" : "light";
    changeTheme(themeStatus);
  }

  return (
    <nav className="w-full fixed top-0 z-50 bg-slate-800 text-white dark:bg-neutral-100 dark:text-slate-900">
          <div className=' container mx-auto px-4 py-3 flex items-center justify-between'>
            <div className="flex items-center space-x-2">
                <CiDumbbell className="text-4xl sm:text-5xl lg:text-6xl" />
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold">GymFluencer</span>
            </div>

            <div className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-indigo-500 hover:font-bold">Home</a>
                <a href="#about" className="hover:text-indigo-500 hover:font-bold">About</a>
                <a href="#services" className="hover:text-indigo-500 hover:font-bold">Services</a>
                <a href="#contact" className="hover:text-indigo-500 hover:font-bold">Contact</a>
            </div>

            <div className="hidden md:flex space-x-4">
                <button className="px-4 py-2 text-sm rounded font-bold bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 dark:bg-slate-4000 dark:text-indigo-900 dark:border-indigo-900 dark:hover:bg-slate-7000">Sign Up</button>
                <button className="px-4 py-2 text-sm rounded font-bold bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">Log In</button>
            </div>

            <div className="flex items-center space-x-4">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={themeMode === "dark"}
                        onChange={onThemeChange}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
                <svg
                    className="w-6 h-6 text-white dark:text-slate-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
          </div>

        {isMenuOpen && (
            <div className="md:hidden bg-slate-800 text-white dark:bg-neutral-100 dark:text-slate-900">
                <div className="flex flex-col items-center space-y-2 px-4 py-2">
                    <a href="#home" className="hover:text-indigo-500">Home</a>
                    <a href="#about" className="hover:text-indigo-500">About</a>
                    <a href="#services" className="hover:text-indigo-500">Services</a>
                    <a href="#contact" className="hover:text-indigo-500">Contact</a>
                    <button className="px-4 py-2 text-sm rounded font-bold bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">Sign Up</button>
                    <button className="px-4 py-2 text-sm rounded font-bold bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 dark:bg-slate-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-slate-700">Log In</button>
                </div>
            </div>
        )}
    </nav>
);

}

export default Header