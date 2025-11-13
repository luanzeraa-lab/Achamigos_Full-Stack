'use client';
import styles from './Animais.module.scss';
import { Container } from 'react-bootstrap';
import Nav2 from '@/components/Navbar';
import { Button } from '../../components/Button';
import Footer from '@/components/Footer';
import axios from 'axios';
import { IAnimal } from './IAnimal';
import { useEffect, useState } from 'react';

const Animais = () => {
  const [animal, setAnimal] = useState<IAnimal[]>([]);

  
  useEffect(() => {
  const listaAnimal = async () => {
    try {
      const res = await axios.get('http://localhost:3002/animais', {
        headers: {
          'x-api-key': '1234', 
        },
      });

      setAnimal(res.data);
      console.log(res.data);
    } catch (err) {
      console.error('Erro ao buscar animais:', err);
    }
  };

  listaAnimal();
}, []);


  return (
    <>
    <div className={styles['Navc']}>
    <Nav2 />
    </div>
    
      <Container fluid className={styles['gridcate']}>
        <div className={styles['apresentacao']}>
          <h1 className="text-[1.875rem] font-bold my-2">
            Pets para adoção
          </h1>
        </div>

        <div className={styles['asfiltro']}>
          <h2>Filtros</h2>
          <div className={styles['flex-col']}>
            <h2>Animais</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Gato</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Cachorro</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Outros</label>
              </li>
            </ul>
          </div>

          <div className={styles['flex-col']}>
            <h2>Porte</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Pequeno</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Médio</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Grande</label>
              </li>
            </ul>
          </div>

          <div className={styles['flex-col']}>
            <h2>Cidade</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Sorocaba</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Votorantim</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Outras</label>
              </li>
            </ul>
          </div>

           <div className={styles['flex-col']}>
            <h2>Castrado</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Sim</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Não</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">NA</label>
              </li>
            </ul>
          </div>

          <div className={styles['flex-col']}>
            <h2>Idade</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">0-10 anos</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">10 anos+</label>
              </li>
            </ul>

          <Button
            title="Filtrar"
            className='w-full'
          />
            
          </div>
        </div>

        <div className={styles['descricaoani']}>

         
           
          
   <div className="flex flex-wrap gap-lg-5">    
  {animal.map((ani) => (
    <figure
      key={ani._id}
      className="bg-white dark:bg-[#1e1e1e]
       rounded-xl shadow-md hover:shadow-lg overflow-hidden
        transition-transform hover:scale-[1.02] "
    >
      <img
        className="rounded-[1rem] w-[20rem] h-[20rem] max-[500px]:w-[12.75rem] max-[500px]:h-[10rem]"
        src={`http://localhost:3002${ani.imagem}`}
        alt={ani.nome}
      />

      <figcaption className="p-3 space-y-2">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
        {ani.nome}
        </h3>
        <p className="text-sm text-gray-900 dark:text-gray-100">
          <span className="font-[700]">Raça:</span>{ani.raca} 
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-[700]">Sexo:</span>{ani.sexo}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-[700]">Idade:</span>{ani.idade}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-[700]">Porte:</span>{ani.porte}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
           <span className="font-[700]">Castrado:</span>{ani.castracao ? 'Sim' : 'Não'}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-[700]">Observações: </span>{ani.observacoes}
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
