'use client';

import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';

const Parceiros = () => {
  return (
    <>
      <Container
        fluid
        className="bg-[#0d0d0d] m-0 p-0 min-h-screen flex flex-col w-screen"
      >
        <Nav2 />

        <div className="flex-1 flex flex-col py-8 px-4 md:px-12">
          <h1 className="text-center text-2xl md:text-3xl uppercase tracking-wide text-white my-4">
            Veja quem são nossos Parceiros!
          </h1>

          <Row className="m-0 p-0">
            <Col xs={12} md={12} lg={6} className="m-0 p-0">
              <ul className="flex flex-col items-center gap-10">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Image
                    src="/images/passaro.avif"
                    alt="Pet Haven"
                    width={250}
                    height={250}
                    className="rounded-full border-4 border-cyan-400 transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-white text-justify leading-relaxed text-base md:text-lg max-w-[600px]">
                    Este é o <strong>Pet Haven</strong>, um lar acolhedor para
                    animais em necessidade. Nossa missão é resgatar, cuidar e
                    encontrar famílias amorosas para pets de todos os tipos. Com
                    uma equipe apaixonada e um ambiente seguro, garantimos que
                    cada animal receba o amor e a atenção que merece. Junte-se a
                    nós para dar a cada pet uma segunda chance de ser feliz!
                  </p>
                </li>

                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Image
                    src="/images/cachorro.avif"
                    alt="Paws & Friends"
                    width={250}
                    height={250}
                    className="rounded-full border-4 border-cyan-400 transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-white text-justify leading-relaxed text-base md:text-lg max-w-[600px]">
                    Este é o <strong>Paws & Friends</strong>, um lugar seguro e
                    acolhedor para animais em necessidade. Nossa missão é
                    resgatar, cuidar e ajudá-los a encontrar lares amorosos. Com
                    uma equipe dedicada e uma comunidade solidária, garantimos
                    que cada pet receba o amor e o cuidado que merece. Junte-se
                    a nós para fazer a diferença — uma patinha de cada vez!
                  </p>
                </li>
              </ul>
            </Col>

            <Col xs={12} md={12} lg={6} className="m-0 p-0">
              <ul className="flex flex-col items-center gap-10">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Image
                    src="/images/cachorro_osso.jpg"
                    alt="Animal Haven"
                    width={250}
                    height={250}
                    className="rounded-full border-4 border-cyan-400 transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-white text-justify leading-relaxed text-base md:text-lg max-w-[600px]">
                    Este é o <strong>Animal Haven</strong>, um santuário dedicado
                    a oferecer cuidados e abrigo para animais em necessidade.
                    Nosso objetivo é resgatar, curar e conectá-los a lares
                    amorosos. Com uma equipe compassiva e um ambiente
                    acolhedor, garantimos que cada pet se sinta seguro e
                    valorizado. Juntos, podemos dar a esses animais o futuro
                    brilhante que eles merecem!
                  </p>
                </li>

                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Image
                    src="/images/cachorrosaude.jpg"
                    alt="Furry Haven"
                    width={250}
                    height={250}
                    className="rounded-full border-4 border-cyan-400 transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-white text-justify leading-relaxed text-base md:text-lg max-w-[600px]">
                    Este é o <strong>Furry Haven</strong>, um lar cheio de amor
                    para animais resgatados. Nossa missão é oferecer abrigo,
                    cuidados médicos e ajudá-los a encontrar uma família para
                    sempre. Com uma equipe apaixonada e um ambiente acolhedor,
                    garantimos que cada pet receba o amor e a atenção de que
                    precisa. Junte-se a nós para dar a esses animais um novo
                    começo!
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
