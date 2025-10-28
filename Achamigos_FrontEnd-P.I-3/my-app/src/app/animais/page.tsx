'use client';

import Image from 'next/image';
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

  // COMENTADO PARA NAO DAR ERRO NA HORA DE FAZER O FRONT, SO TIRAR O COMENTARIO DEPOIS
  // useEffect(() => {
  //   const listaAnimal = async () => {
  //    const response = await axios.get('http://localhost:3002/cadastroanimal');

  //     setAnimal(response.data);
  //      console.log(response.data);
  //   };
  //   listaAnimal();
  //  }, []);


  return (
    <>
      <Container fluid className={styles['gridcate']}>
        <div className={styles['Navc']}>
          <Nav2 />{' '}
        </div>

        <div className={styles['apresentacao']}>
          <h1 className="text-[1.875rem] font-[700]">
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
                {' '}
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
                {' '}
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
                {' '}
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

         
          {/* CONFIGURAR RENDERIZACAO DEPOIS 
          
          {animal.map((ani) => {
            return (
              <figure className={styles['figures']} key={ani._id}>
                <img
                  className="w-50 h-auto"
                  src={`http://localhost:3002${ani.imagem}`}
                  alt="imagem"
                />
                <figcaption>
                  <p>
                    <span className="font-bold">Nome:</span> {ani.nome}
                  </p>
                  <p>
                    <span className="font-bold">Idade:</span> {ani.idade}
                  </p>
                  <p>
                    <span className="font-bold">Raça:</span> {ani.raca}
                  </p>
                  <p>
                    <span className="font-bold">Sexo:</span> {ani.sexo}
                  </p>
                  <p>
                    <span className="font-bold">Porte:</span> {ani.porte}
                  </p>
                  <p>
                    <span className="font-bold">Peso:</span> {ani.peso}
                  </p>
                  <p>
                    <span className="font-bold">Animal castrado?:</span>{' '}
                    {ani.castracao ? 'Sim' : 'Não'}
                  </p>
                  <p>
                    <span className="font-bold">Observações:</span>{' '}
                    {ani.observacoes}
                  </p>
                </figcaption>
              </figure>

              
            );
          })} */}

               
            
              <figure className={styles['figures']}>

       
                   <img
                  className="w-[27.375rem] h-40 rounded-tl-[0.75rem] e rounded-bl-[0.75rem]"
                  src="/images/dog-.jpg"
                  alt="imagem"
                />
 

                <figcaption className='px-[7rem]  flex gap-[7rem]'>
                 
                 <div className=''>
                  <span>Nome</span>
                  <p>Bob</p>

                  <span>Gênero</span>
                  <p>Macho</p>

                  <span>Raça</span>
                  <p>Pitbull</p>
                 </div>

                  <div className=''>
                  <span>Idade</span>
                  <p>5 anos</p>

                  <span>Porte</span>
                  <p>Pequeno</p>

                  <span>Peso</span>
                  <p>4 kg</p>
                 </div>

                   <div className=''>
                  <span>Animal castrado?</span>
                  <p>Sim</p>

                  <span>Observações:</span>
                  <p>Muito dócil, gosta de socializar com outros cães, tem medo de chuva.</p>
                 </div>


                  {/* <p>
                    <span className="font-bold">Nome:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Idade:</span>
                  </p>
                  <p>
                    <span className="font-bold">Raça:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Sexo:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Porte:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Peso:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Animal castrado?:</span>
                   
                  </p>
                  <p>
                    <span className="font-bold">Observações:</span>
                  </p> */}
                </figcaption>
              </figure>

               <figure className={styles['figures']}>

       
                   <img
                  className="w-[27.375rem] h-40 rounded-tl-[0.75rem] e rounded-bl-[0.75rem]"
                  src="/images/dog-.jpg"
                  alt="imagem"
                />
 

                <figcaption className='px-[7rem] flex gap-[7rem]'>
                 
                 <div className=''>
                  <span>Nome</span>
                  <p>Bob</p>

                  <span>Gênero</span>
                  <p>Macho</p>

                  <span>Raça</span>
                  <p>Pitbull</p>
                 </div>

                  <div className=''>
                  <span>Idade</span>
                  <p>5 anos</p>

                  <span>Porte</span>
                  <p>Pequeno</p>

                  <span>Peso</span>
                  <p>4 kg</p>
                 </div>

                   <div className=''>
                  <span>Animal castrado?</span>
                  <p>Sim</p>

                  <span>Observações:</span>
                  <p>Muito docil</p>
                 </div>


                  {/* <p>
                    <span className="font-bold">Nome:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Idade:</span>
                  </p>
                  <p>
                    <span className="font-bold">Raça:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Sexo:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Porte:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Peso:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Animal castrado?:</span>
                   
                  </p>
                  <p>
                    <span className="font-bold">Observações:</span>
                  </p> */}
                </figcaption>
              </figure>

 <figure className={styles['figures']}>

       
                   <img
                  className="w-[27.375rem] h-40 rounded-tl-[0.75rem] e rounded-bl-[0.75rem]"
                  src="/images/dog-.jpg"
                  alt="imagem"
                />
 

                <figcaption className='px-[7rem] flex gap-[7rem]'>
                 
                 <div className=''>
                  <span>Nome</span>
                  <p>Bob</p>

                  <span>Gênero</span>
                  <p>Macho</p>

                  <span>Raça</span>
                  <p>Pitbull</p>
                 </div>

                  <div className=''>
                  <span>Idade</span>
                  <p>5 anos</p>

                  <span>Porte</span>
                  <p>Pequeno</p>

                  <span>Peso</span>
                  <p>4 kg</p>
                 </div>

                   <div className=''>
                  <span>Animal castrado?</span>
                  <p>Sim</p>

                  <span>Observações:</span>
                  <p>Muito docil</p>
                 </div>


                  {/* <p>
                    <span className="font-bold">Nome:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Idade:</span>
                  </p>
                  <p>
                    <span className="font-bold">Raça:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Sexo:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Porte:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Peso:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Animal castrado?:</span>
                   
                  </p>
                  <p>
                    <span className="font-bold">Observações:</span>
                  </p> */}
                </figcaption>
              </figure>

              
 <figure className={styles['figures']}>

       
                   <img
                  className="w-[27.375rem] h-40 rounded-tl-[0.75rem] e rounded-bl-[0.75rem]"
                  src="/images/dog-.jpg"
                  alt="imagem"
                />
 

                <figcaption className='px-[7rem] flex gap-[7rem]'>
                 
                 <div className=''>
                  <span>Nome</span>
                  <p>Bob</p>

                  <span>Gênero</span>
                  <p>Macho</p>

                  <span>Raça</span>
                  <p>Pitbull</p>
                 </div>

                  <div className=''>
                  <span>Idade</span>
                  <p>5 anos</p>

                  <span>Porte</span>
                  <p>Pequeno</p>

                  <span>Peso</span>
                  <p>4 kg</p>
                 </div>

                   <div className=''>
                  <span>Animal castrado?</span>
                  <p>Sim</p>

                  <span>Observações:</span>
                  <p>Muito docil</p>
                 </div>


                  {/* <p>
                    <span className="font-bold">Nome:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Idade:</span>
                  </p>
                  <p>
                    <span className="font-bold">Raça:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Sexo:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Porte:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Peso:</span> 
                  </p>
                  <p>
                    <span className="font-bold">Animal castrado?:</span>
                   
                  </p>
                  <p>
                    <span className="font-bold">Observações:</span>
                  </p> */}
                </figcaption>
              </figure>



        </div>

        <div className={styles['footercat']}>
          {' '}
          <Footer />{' '}
        </div>
      </Container>
    </>
  );
};

export default Animais;
