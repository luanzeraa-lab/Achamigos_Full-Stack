'use client';
import styles from './Animais.module.scss';
import { Container } from 'react-bootstrap';
import Nav2 from '@/components/Navbar';
import { Button } from '../../components/Button';
import Footer from '@/components/Footer';
import axios from 'axios';
import { IAnimal } from './IAnimal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const GerenciarAnimais = () => {
    const router = useRouter()
    const [animal, setAnimal] = useState<IAnimal[]>([]);
    const [userId, setUserId] = useState<string | null>(null);
    
    useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
    }, []);
    
  useEffect(() => {
  const listaAnimal = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/animais`, {
        headers: {
          'x-api-key': '1234', 
        },
      });
      const animaisFiltrados = res.data.filter((animal: any)=>{
        return animal.userId === userId || animal.user?._id === userId;
      })
      setAnimal(animaisFiltrados);

    } catch (err) {
      console.error('Erro ao buscar animais:', err);
    }
  };

  listaAnimal();
}, [userId]);

const deletarAnimal = async (id) => {
  if (!confirm("Tem certeza que deseja deletar este animal?"))
    
    return;

  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/animais/${id}`, {
      headers: { 
        'x-api-key': '1234'
       }
    });

    setAnimal((old) => old.filter((a) => a._id !== id));

    alert("Animal deletado com sucesso!");
  } catch (err) {
    console.error("Erro ao deletar animal:", err);
    alert("Erro ao deletar animal!");
  }
};

  return (
    <>
    <div className={styles['Navc']}>
    <Nav2 />
    </div>
    
      <Container fluid className={styles['gridcate']}>
        <div className={styles['apresentacao']}>
          <h1 className="text-[1.875rem] font-bold my-2">
            Seus animais
          </h1>
        </div>

         
   <div className={styles['descricaoani']} >

        <div className="flex flex-wrap gap-5">    
            {animal.map((ani) => (
            <figure 
                key={ani._id}
                className={styles['figures']}
            >
                <img
                className="rounded-[1rem] w-[20rem] h-[20rem] max-[500px]:w-[12.75rem] max-[500px]:h-[10rem]"
                src={`${process.env.NEXT_PUBLIC_API_URL}${ani.imagem}`}
                alt={ani.nome}
                />

                <figcaption className="justify-start p-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {ani.nome}
                </h3>

                <p className="text-sm text-gray-900 dark:text-gray-100 flex gap-2 mb-0">
                    <span className="font-[700]">Raça:</span> {ani.raca}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
                    <span className="font-[700]">Sexo:</span> {ani.sexo}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
                    <span className="font-[700]">Idade:</span> {ani.idade}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
                    <span className="font-[700]">Porte:</span> {ani.porte}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 mb-0">
                    <span className="font-[700]">Castrado:</span> {ani.castracao ? 'Sim' : 'Não'}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-[700]">Observações:</span> {ani.observacoes}
                </p>

                <p className="text-sm text-gray-600 flex gap-2">
                  <a
                    href={/^https?:\/\//i.test(ani.linkAnimal) ? ani.linkAnimal : `https://${ani.linkAnimal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    Encontre seu Amiguinho
                  </a>
                </p>
                                <div className='flex gap-2'>
                  <Button
                  title="Vacinar Animal"
                  className="max-[500px]:hidden "
                  onClick={() => router.push('/PaginaUsuario')}
                />
                  <Button
                  title="Alterar Animal"
                  className="max-[500px]:hidden "
                  onClick={() => router.push(`../AlterarAnimal/${ani._id}`)}
                />
                  <Button
                  title="Deletar Animal"
                  className="max-[500px]:hidden "
                  onClick={() => deletarAnimal(ani._id)}
                />
                </div>
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

export default GerenciarAnimais;
