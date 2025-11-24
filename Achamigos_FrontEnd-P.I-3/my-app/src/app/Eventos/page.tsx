'use client';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IEvento } from '../CadastroEvento/IEvento';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Eventos = () => {
  const [eventos, setEventos] = useState<IEvento[]>([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/eventos`, {
          headers: {
            'x-api-key': 1234,
          },
        });
        setEventos(response.data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };
    fetchEventos();
  }, []);

  return (
    <>
      <Nav2 />
      <main className=" mx-4 min-h-screen my-4 rounded-[1rem] bg-[#f3f4f6] p-4">
        {eventos.length === 0 ? (
          <p className="self-start">Nenhum evento disponível no momento.</p>
        ) : (
          <p className="self-start">Próximos eventos</p>
        )}
        <div className="flex flex-wrap gap-3">
          {eventos.map((evento) => (
            <div
              key={evento._id}
              className="rounded-[1rem] m-auto bg-[#fffffe] p-4 outline-1 outline-[#a3a3a3] flex flex-col gap-2"
            >
              <img
                className="rounded-[1rem] w-[18.75rem] h-[12.5rem] max-[500px]:w-[12.75rem] max-[500px]:h-[10rem]"
                src={`${process.env.NEXT_PUBLIC_API_URL}${evento.imagem}`}
                alt={evento.tipo_Evento}
              />

              <p className="m-0 text-[#374151]">
                {new Date(evento.data).toLocaleDateString('pt-BR')}
              </p>
              <h1 className="font-[700] text-[1.5rem] m-0">
                {evento.tipo_Evento}
              </h1>
              <p className="text-[#374151]">{evento.texto}</p>
              <a href={/^https?:\/\//i.test(evento.linkEvento) ? evento.linkEvento : `https://${evento.linkEvento}`}
                target="_blank"
                style={{ textDecoration: "underline", color: "blue" }}
                rel="noopener noreferrer">Link para o evento</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Eventos;
