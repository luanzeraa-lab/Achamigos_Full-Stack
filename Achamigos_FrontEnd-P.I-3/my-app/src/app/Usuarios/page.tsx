'use client';
import styles from './Animais.module.scss';
import { Container } from 'react-bootstrap';
import Nav2 from '@/components/Navbar';
import { Button } from '../../components/Button';
import Footer from '@/components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Usuarios = () => {
  
const [user, setUser] = useState<any[]>([]);  
  
  useEffect(() => {
  const listaUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3002/users', {
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

         
           
          
   <div className="flex flex-wrap gap-lg-5 ">    
  {animal.map((ani) => (
    <figure 
      key={ani._id}
      className={styles['figures']}
    >
      <img
        className="rounded-[1rem] w-[20rem] h-[20rem] max-[500px]:w-[12.75rem] max-[500px]:h-[10rem]"
        src={`http://localhost:3002${ani.imagem}`}
        alt={ani.nome}
      />

      <figcaption className="justify-start p-4">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
        {ani.nome}
        </h3>
        <p className="text-sm text-gray-900 dark:text-gray-100 flex gap-2 mb-0">
          <span className="font-[700]">Raça:</span><p>{ani.raca}</p>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
          <span className="font-[700]">Sexo:</span><p>{ani.sexo}</p>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0 ">
          <span className="font-[700]">Idade:</span><p>{ani.idade}</p>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
          <span className="font-[700]">Porte:</span><p>{ani.porte}</p>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
           <span className="font-[700]">Castrado:</span><p>{ani.castracao ? 'Sim' : 'Não'}</p>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-[700]">Observações:</span><p>{ani.porte}</p>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
          <a href={/^https?:\/\//i.test(ani.linkAnimal) ? ani.linkAnimal : `https://${ani.linkAnimal}`}
                target="_blank"
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

export default Usuarios;
