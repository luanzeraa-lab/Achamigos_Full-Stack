'use client';
import styles from './Usuarios.module.scss';
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
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
        headers: {
          'x-api-key': '1234', 
        },
      });

      setUser(res.data);
      console.log(res.data);
    } catch (err) {
      console.error('Erro ao buscar animais:', err);
    }
  };

  listaUsers();
}, []);


  return (
    <>
    <div className={styles['Navc']}>
    <Nav2 />
    </div>
    
      <Container fluid className={styles['gridcate']}>
        <div className={styles['apresentacao']}>
          <h1 className="text-[1.875rem] font-bold my-2">
            Parceiros do Achamigos
          </h1>
        </div>

        

      <div className={styles['descricaoani']}>

         
           
          
          <div className="flex flex-wrap gap-lg-5 ">    
          {user.map((user) => (
            <figure 
              key={user._id}
              className={styles['figures']}
            >
              

              <figcaption className="justify-start p-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                {user.nome}
                </h3>
                <p className="text-sm text-gray-900 dark:text-gray-100 flex gap-2 mb-0">
                  <span className="font-[700]">Telefone:</span><span>{user.telefone}</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
                  <span className="font-[700]">Email:</span><span>{user.email}</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                  <a href={/^https?:\/\//i.test(user.linkUser) ? user.linkUser : `https://${user.linkUser}`}
                        target="_blank"
                        style={{ textDecoration: "underline", color: "blue" }}
                        rel="noopener noreferrer">Conheça nosso parceiro</a>
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
