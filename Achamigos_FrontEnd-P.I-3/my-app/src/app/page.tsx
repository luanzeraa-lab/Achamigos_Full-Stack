'use client';

import { useState, useEffect } from 'react';
import Nav2 from '../components/Navbar';
import Footer from '../components/Footer';
import ComoUsar from '../components/ComoUsar';
import Sobre from '../components/Sobre';
import '../styles/globals.scss';

export default function App() {
  
  return (
    <div className="min-h-screen transition-colors duration-300
    ">
      <Nav2 />
      <Sobre />
      <ComoUsar />
      <Footer />
    </div>
  );
}
