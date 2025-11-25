'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { IRelatorio } from './IRelatorio';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';
import PaginaRelatorio from '@/components/PaginaRelatorio';
import "./relatorio.css";



const RelatorioVacinas =  () => {
  const [relatorio, setRelatorio ] = useState<IRelatorio[]>([]);
  
  useEffect(() => {
      const listarVacinas = async () => {
        try {
          const res = await axios.get('https://vacinaspringboot.onrender.com/vacinacao');
          console.log("🧩 Dados do backend:", res.data);
      setRelatorio(res.data);
        } catch (err) {
          console.error('Erro ao buscar vacinas', err);
        }
      };
      listarVacinas();
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
    {relatorio.sort((a1, a2) => {
      const nomeA = a1.animalNome.toUpperCase();
      const nomeB = a2.animalNome.toUpperCase();
      if (nomeA < nomeB) {
        return -1; 
      }
      if (nomeA > nomeB) {
        return 1; 
      }
      return 0; 
    }).map((item, index) => (
      <tr key={index} style={{ borderBottom: '2px solid #eee' }}>
        <td style={{ padding: '8px',  textAlign: 'center' }}>{item.animalNome}</td>
        <td style={{ padding: '8px',  textAlign: 'center' }}>{item.vacinaNome}</td>
        <td style={{ padding: '8px',  textAlign: 'center' }}>
          {item.dataAplicacao 
        ? new Date(item.dataAplicacao).toLocaleDateString("pt-BR")
        : "Data Inválida"
      }
        </td>
      </tr>
    ))}
  </tbody>
</table>
<PaginaRelatorio dados={relatorio} />

      <Footer />
    </>
  );
};

export default RelatorioVacinas;
