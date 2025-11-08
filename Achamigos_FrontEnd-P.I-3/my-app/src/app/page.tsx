'use client';

import { useState, useEffect } from 'react';
import Nav2 from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ComoUsar from '../components/ComoUsar';
import Sobre from '../components/Sobre';
import '../styles/globals.scss';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setDarkMode(savedTheme === 'dark'); 
  }
}, []);

useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
}, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <button
        onClick={() => setDarkMode(prev => !prev)}
        className="fixed top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white z-50"
      >
        {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>

      <Nav2 />
      <Sobre />
      <ComoUsar />
      <Footer />
    </div>
  );
}
