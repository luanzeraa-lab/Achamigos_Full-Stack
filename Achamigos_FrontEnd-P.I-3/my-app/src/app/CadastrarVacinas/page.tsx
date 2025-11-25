'use client';

import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { IVacina } from './IVacina';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const CadastroVacina = () => {
  const [nomeVacina, setNomeVacina] = useState<string>('');
  const [validadeVacina, setValidadeVacina] = useState<string>('');
  
  const router = useRouter();
  const createVacina = async () => {
    const novaVacina: IVacina = {
      nome: nomeVacina,
      validade: validadeVacina,
    };

    try {
      const res = await axios.post('https://vacinaspringboot.onrender.com/api/vacinas', novaVacina);
        if (res.status === 200 || res.status === 201) {
        alert('Vacina cadastrada com sucesso!');
        router.push('/PaginaUsuario');
          
        setNomeVacina('');
      } else {
        alert('Falha ao tentar cadastrar o vacina');
      }
    } catch {
      alert('Erro ao cadastrar o vacina');
    }
  };

  return (
    <>
    <Nav2 />
        <Form className='max-[850px]:w-[35.625rem] max-[600px]:w-[20.625rem]  shadow-sm rounded-[.5rem] h-[80rem] w-[50rem] flex flex-col gap-2 bg-[#f5f5f4] p-4 mb-[4rem]'>
          <div>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome"
              value={nomeVacina}
              onChange={(e) => setNomeVacina(e.target.value)}
            />
          </div>
          <div>
            <Form.Label>Validade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a validade"
              value={validadeVacina}
              onChange={(e) => setValidadeVacina(e.target.value)}
            />
          </div>
            <input type="button" value="Cadastrar Vacina" className='bg-[#3a86ff] text-white font-[600] h-[2.5rem] rounded-[0.5rem] mt-4 hover:bg-[#265f9f] cursor-pointer'
            onClick={() => createVacina()}/>
        </Form>

   
      <Footer />
    </>
  );
};

export default CadastroVacina;
