'use client'; 
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Carrossel = () => {
  useEffect(() => {
    import('bootstrap'); 
  }, []);

  return (
    <section className="d-flex justify-content-center mt-4">
      <div id="carouselExampleIndicators" className="carousel slide w-2/3" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner justify-center">
          <div className="carousel-item active">
            <div className='d-flex justify-content-center'>
              <Image
                src="/images/feira_adocao.png"
                alt="Imagem de uma feira de adoção de animais"
                width={1200}
                height={600}
                style={{
                  objectFit: 'cover', 
                  width: '1200px',
                  height: '600px'
                }}
              />
            </div>
          </div>

          <div className="carousel-item">
            <div className='d-flex justify-content-center'>
              <Image 
                src="/images/vacinacao.png"
                alt="Imagem de uma campanha de vacinação de animais"
                width={1200}
                height={600}
                style={{
                  objectFit: 'cover', 
                  width: '1200px',
                  height: '600px'
                }}
              />
            </div>
          </div>

          <div className="carousel-item">
            <div className='d-flex justify-content-center'>
              <Image 
                src="/images/conscientizacao.png"
                alt="Imagem de um evento de conscientização"
                width={1200}
                height={600}
                style={{
                  objectFit: 'cover', 
                  width: '1200px',
                  height: '600px'
                }}
              />
            </div>
          </div>
        </div>

        <button className="carousel-control-prev bg-transparent border-2"
          type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon  p-4 m-2 hover:scale-150" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          
        </button>
        <button className="carousel-control-next" 
          type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon  p-4 m-2 hover:scale-150" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carrossel;