'use client';

import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IRelatorio } from './IRelatorio';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';


const RelatorioVacinas =  () => {
  const [relatorio, setRelatorio ] = useState<IRelatorio[]>([]);
  
  useEffect(() => {
      const fetchVacinas = async () => {
        try {
          const res = await axios.get('http://localhost:8081/vacinacao');
          console.log("🧩 Dados do backend:", res.data);
      setRelatorio(res.data);
        } catch (err) {
          console.error('Erro ao buscar vacinas', err);
        }
      };
      fetchVacinas();
    }, []);

  return (
    <>
    <Nav2 />
        <div >
              {relatorio.map((item, index) => (
  <p key={index}>
    {item.animalNome ?? "Sem nome"} - {item.vacinaNome ?? "Sem vacina"} -{" "}
    {item.dataAplicacao
      ? new Date(item.dataAplicacao).toLocaleDateString("pt-BR")
      : "Sem data"}
  </p>
))}
            </div>
      <Footer />
    </>
  );
};

export default RelatorioVacinas;
