'use client';
import styles from './Animais.module.scss';
import { Container } from 'react-bootstrap';
import Nav2 from '@/components/Navbar';
import { Button } from '../../components/Button';
import Footer from '@/components/Footer';
import axios from 'axios';
import { IAnimal } from './IAnimal'; 
import { useEffect, useState } from 'react';


const TIPOS = ['gato', 'cachorro', 'outro'];
const PORTES = ['pequeno', 'medio', 'grande'];
const CASTRADOS = ['sim', 'nao'];
const IDADES = ['0-10 anos', '10 anos+'];


interface Filtros {
  tipo: string[];
  porte: string[];
  castrado: string[];
  idade: string[];
}

const Animais = () => {
  const [animaisOriginais, setAnimaisOriginais] = useState<IAnimal[]>([]);
  const [animaisFiltrados, setAnimaisFiltrados] = useState<IAnimal[]>([]);
  const [filtros, setFiltros] = useState<Filtros>({
    tipo: [],
    porte: [],
    castrado: [],
    idade: [],
  });

  useEffect(() => {
    const listaAnimal = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/animais`,
          { headers: { 'x-api-key': '1234' } }
        );
        setAnimaisOriginais(res.data);
        setAnimaisFiltrados(res.data); 
      } catch (err) {
        console.error('Erro ao buscar animais:', err);
      }
    };
    listaAnimal();
  }, []);

  const handleFiltroChange = (categoria: keyof Filtros, valor: string) => {
    setFiltros(prev => {
      const lista = prev[categoria];
      
      if (lista.includes(valor)) {
        return { ...prev, [categoria]: lista.filter(v => v !== valor) };
      } 
      else {
        return { ...prev, [categoria]: [...lista, valor] };
      }
    });
  };
  const aplicarFiltro = () => {

    if (
      filtros.tipo.length === 0 &&
      filtros.porte.length === 0 &&
      filtros.castrado.length === 0 &&
      filtros.idade.length === 0
    ) {
      setAnimaisFiltrados(animaisOriginais);
      return;
    }

    const res = animaisOriginais.filter(ani => {

      const tipoAnimal = ani.tipo?.toLowerCase() || '';
      if (filtros.tipo.length > 0 && !filtros.tipo.includes(tipoAnimal)) return false;

      const porteAnimal = ani.porte?.toLowerCase() || '';
      if (filtros.porte.length > 0 && !filtros.porte.includes(porteAnimal)) return false;

      if (filtros.castrado.length > 0) {
        const castradoStatus = ani.castracao ? 'sim' : 'nao';
        if (!filtros.castrado.includes(castradoStatus)) return false;
      }

      if (filtros.idade.length > 0) {
        if (typeof ani.idade !== 'number') return false; 
        const idadeRange = ani.idade <= 10 ? '0-10 anos' : '10 anos+';
        if (!filtros.idade.includes(idadeRange)) return false;
      }

      return true;
    });

    setAnimaisFiltrados(res);
  };

  return (
    <>
      <div className={styles['Navc']}>
        <Nav2 />
      </div>

      <Container id='darks' fluid className={styles['gridcate']}>
        <div className={styles['apresentacao']}>
          <h1 className="text-[1.875rem] font-bold my-2">Pets para adoção</h1>
        </div>

        <div id='darks' className={styles['asfiltro']}>
          <h2>Filtros</h2>

          <div className={styles['flex-col']}>
            <h2>Animais</h2>
            <ul>
              {TIPOS.map(tipo => (
                <li key={tipo}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filtros.tipo.includes(tipo)}
                    onChange={() => handleFiltroChange('tipo', tipo)}
                  />
                  <label className="form-check-label">{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</label>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles['flex-col']}>
            <h2>Porte</h2>
            <ul>
              {PORTES.map(porte => (
                <li key={porte}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filtros.porte.includes(porte)}
                    onChange={() => handleFiltroChange('porte', porte)}
                  />
                  <label className="form-check-label">{porte.charAt(0).toUpperCase() + porte.slice(1)}</label>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles['flex-col']}>
            <h2>Castrado</h2>
            <ul>
              {CASTRADOS.map(c => (
                <li key={c}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filtros.castrado.includes(c)}
                    onChange={() => handleFiltroChange('castrado', c)}
                  />
                  <label className="form-check-label">{c.charAt(0).toUpperCase() + c.slice(1)}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['flex-col']}>
            <h2>Idade</h2>
            <ul>
              {IDADES.map(i => (
                <li key={i}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filtros.idade.includes(i)}
                    onChange={() => handleFiltroChange('idade', i)}
                  />
                  <label className="form-check-label">{i}</label>
                </li>
              ))}
            </ul>

            <Button title="Filtrar" className='w-full' onClick={aplicarFiltro} /> 
          </div>
        </div>

        <div className={styles['descricaoani']}>
          <div className="flex flex-wrap gap-4 justify-center">
            {animaisFiltrados.map(ani => (
              <figure key={ani._id} className={styles['figures']}>
                <img
                  className="rounded-[1rem] w-[20rem] h-[20rem] max-[500px]:w-[12.75rem] max-[500px]:h-[10rem]"
                  src={`${process.env.NEXT_PUBLIC_API_URL}${ani.imagem}`}
                  alt={ani.nome}
                />
                <figcaption id='info' className="justify-start p-4">
                  <h3 id='infoAnimais' className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {ani.nome}
                  </h3>
                  <p className="text-sm text-gray-900 dark:text-gray-100 flex gap-2 mb-0">
                    <span className="font-[700]">Raça:</span><span>{ani.raca}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
                    <span className="font-[700]">Sexo:</span><span>{ani.sexo}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0 ">
                    <span className="font-[700]">Idade:</span><span>{ani.idade}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
                    <span className="font-[700]">Porte:</span><span>{ani.porte}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
                    <span className="font-[700]">Castrado:</span><span>{ani.castracao ? 'Sim' : 'Não'}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-[700]">Observações:</span><span>{ani.observacoes}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                    <a href={/^https?:\/\//i.test(ani.linkAnimal) ? ani.linkAnimal : `https://${ani.linkAnimal}`}
                      target="_blank"
                      style={{ textDecoration: "underline", color: "blue" }}
                      rel="noopener noreferrer">Encontre seu Amiguinho</a>
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Animais;