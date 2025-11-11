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
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr style={{ borderBottom: '2px solid #ccc' }}>
      <th style={{ padding: '8px', textAlign: 'center' }}>Animal</th>
      <th style={{ padding: '8px', textAlign: 'center' }}>Vacina</th>
      <th style={{ padding: '8px', textAlign: 'center' }}>Data de Aplicação</th>
    </tr>
  </thead>
  <tbody>
    {relatorio.map((item, index) => (
      <tr key={index} style={{ borderBottom: '2px solid #eee' }}>
        <td style={{ padding: '8px',  textAlign: 'center' }}>{item.animalNome}</td>
        <td style={{ padding: '8px',  textAlign: 'center' }}>{item.vacinaNome}</td>
        <td style={{ padding: '8px',  textAlign: 'center' }}>
          {item.dataAplicacao}
        </td>
      </tr>
    ))}
  </tbody>
</table>
      <Footer />
    </>
  );
};

export default RelatorioVacinas;
