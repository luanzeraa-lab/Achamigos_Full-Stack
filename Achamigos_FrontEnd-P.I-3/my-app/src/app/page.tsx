'use client';

import Nav2 from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ComoUsar from '../components/ComoUsar';
import Sobre from '../components/Sobre';
import '../styles/globals.scss';

const App = () => {
  return (
    <div className="bg-[#fffffe]">
      <Nav2 />
      <Sobre />
      <ComoUsar />
      <Footer />
    </div>
  );
};

export default App;
