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

         
           
          
          {animal.map((ani) => ('Imagem', ani.imagem,
                
              <figure
                key={ani._id}
                className="flex bg-white dark:bg-[#1e1e1e] shadow-md rounded-xl overflow-hidden mb-6"
              >
                
                <img
                  className="w-[27.375rem] h-40 object-cover rounded-tl-xl rounded-bl-xl"
                  src={`http://localhost:3002${ani.imagem}`}
                  alt={ani.nome}
                />

                
                <figcaption className="px-10 py-4 flex gap-20 w-full justify-between">
                  
                  <div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Nome</span>
                    <p className="text-gray-900 dark:text-white mb-2">{ani.nome}</p>

                    <span className="font-semibold text-gray-700 dark:text-gray-300">Gênero</span>
                    <p className="text-gray-900 dark:text-white mb-2">{ani.sexo}</p>

                    <span className="font-semibold text-gray-700 dark:text-gray-300">Raça</span>
                    <p className="text-gray-900 dark:text-white">{ani.raca}</p>
                  </div>

                  
                  <div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Idade</span>
                    <p className="text-gray-900 dark:text-white mb-2">{ani.idade}</p>

                    <span className="font-semibold text-gray-700 dark:text-gray-300">Porte</span>
                    <p className="text-gray-900 dark:text-white mb-2">{ani.porte}</p>

                    <span className="font-semibold text-gray-700 dark:text-gray-300">Peso</span>
                    <p className="text-gray-900 dark:text-white">{ani.peso}</p>
                  </div>

                  
                  <div className="max-w-md">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Animal castrado?</span>
                    <p className="text-gray-900 dark:text-white mb-2">
                      {ani.castracao ? 'Sim' : 'Não'}
                    </p>

                    <span className="font-semibold text-gray-700 dark:text-gray-300">Observações</span>
                    <p className="text-gray-900 dark:text-white">{ani.observacoes}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Animais;
