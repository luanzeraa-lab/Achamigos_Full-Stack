
"use client";
 
import Image from "next/image";
import {  Container, Row, Col } from 'react-bootstrap';
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";

 
const Parceiros = () => {
  return (
    <>
 
    <Container fluid className="bg-[#ffeccf] m-0 p-0 min-h-screen flex flex-col w-screen">
  <Nav2 />

  <div className="w-full h-1 bg-gradient-to-r from-white to-black"></div>

  <div className="text-center bg-dark flex-1 flex flex-col">
    <h1 className="font-sans text-3xl uppercase tracking-wide text-white">
      Veja quem são nossos Parceiros!
    </h1>

    <Row className="m-0 p-0">
      <Col xs={12} md={12} lg={6} className="m-0 p-0">
        <ul>
          <li className="flex items-center gap-4">
            <Image
              src="/images/passaro.avif"
              id="pethaven"
              alt="pethaven"
              width={250}
              height={250}
              className="ml-10 mt-5 border-2 border-double border-cyan-400 rounded-full transition-transform duration-300 hover:scale-110"
            />
            <p className="text-white">
              This is Pet Haven, a welcoming home for animals in need. Our mission is to rescue, care for, and find loving families for pets of all kinds. With a passionate team and a safe environment, we ensure every animal receives the love and attention they deserve. Join us in giving every pet a second chance at happiness!
            </p>
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/images/cachorro.avif"
              id="pawsfriends"
              alt="pawsfriends"
              width={250}
              height={250}
              className="ml-10 mt-5 border-2 border-double border-cyan-400 rounded-full transition-transform duration-300 hover:scale-110"
            />
            <p className="text-white">
              This is Paws & Friends, a safe and caring place for animals in need. Our mission is to rescue, nurture, and help them find loving homes. With a dedicated team and a supportive community, we make sure every pet gets the love and care they deserve. Join us in making a difference—one paw at a time!
            </p>
          </li>
        </ul>
      </Col>

      <Col xs={12} md={12} lg={6} className="m-0 p-0">
        <ul>
          <li className="flex items-center gap-4">
            <Image
              src="/images/cachorro_osso.jpg"
              id="animalhaven"
              alt="animalhaven"
              width={250}
              height={250}
              className="ml-10 mt-5 border-2 border-double border-cyan-400 rounded-full transition-transform duration-300 hover:scale-110"
            />
            <p className="text-white">
              This is Animal Haven, a sanctuary dedicated to providing care and shelter for animals in need. Our goal is to rescue, heal, and connect them with loving homes. With a compassionate team and a nurturing environment, we ensure that every pet feels safe and valued. Together, we can give these animals the bright future they deserve!
            </p>
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/images/cachorrosaude.jpg"
              id="furryhaven"
              alt="furryhaven"
              width={250}
              height={250}
              className="ml-10 mt-5 border-2 border-double border-cyan-400 rounded-full transition-transform duration-300 hover:scale-110"
            />
            <p className="text-white">
              This is Furry Haven, a loving home for rescued animals. Our mission is to provide shelter, medical care, and help them find a forever family. With a passionate team and a warm environment, we ensure every pet receives the love and attention they need. Join us in giving these animals a new beginning
            </p>
          </li>
        </ul>
      </Col>
    </Row>
  </div>

  <Footer />
</Container>
 
    
    </>
  );
};
 
export default Parceiros;
 