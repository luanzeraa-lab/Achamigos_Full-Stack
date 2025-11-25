'use client';

import Nav2 from '../components/Navbar';
import Footer from '../components/Footer';
import VLibras from 'vlibras-nextjs';
import ComoUsar from '../components/ComoUsar';
import Sobre from '../components/Sobre';


export default function App() {
  
  return (
    <div className="min-h-screen transition-colors duration-300
    ">
      <Nav2 />
      <div className="App">
        <VLibras forceOnload />
      </div>
      <Sobre />
      <ComoUsar />
      <Footer />
    </div>
  );
}
