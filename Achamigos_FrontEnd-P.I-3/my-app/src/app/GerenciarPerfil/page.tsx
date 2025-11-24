'use client';

import { Button } from '../../components/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { IUser } from '../CadastroUsuario/IUser';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultaCep from '@/components/ConsultaCep';
import { IEndereco } from '../CadastroUsuario/IEndereco';
import { header } from 'framer-motion/client';

const GerenciarPerfil = () => {
  const [nomeUser, setNomeUser] = useState<string>('');
  const [telefoneUser, setTelefoneUser] = useState<string>('');
  const [cnpjUser, setCnpjUser] = useState<string>('');
  const [userLogin, setUserLogin] = useState<string>('');
  const [senhaUser, setSenhaUser] = useState<string>('');
  const [emailUser, setEmailUser] = useState<string>('');
  const [numeroUser, setNumeroUser] = useState<string>('');
  const [linkUser, setLinkUser] = useState<string>('');

  const updateUser = async () => {
    const userId = localStorage.getItem("userId");
    
    const endereco: IEndereco = { ...window.getEndereco(), numero: numeroUser };

    const novoUser: IUser = {
      nome: nomeUser,
      telefone: telefoneUser,
      cnpj: cnpjUser,
      userLogin: userLogin,
      senha: senhaUser,
      email: emailUser,
      endereco,
      linkUser: linkUser,
    };

    try {
        const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`,
        novoUser,
        {
            headers: {
            'x-api-key': 1234
            }
        }
        );

      if (res.status === 200) {
        alert('Perfil atualizado com sucesso!');
      } else {
        alert('Falha ao tentar atualizar o perfil');
      }
    } catch {
      alert('Erro ao atualizar o perfil');
    }
  };

  return (
    <>
    <Nav2 />
    <div className='flex flex-col items-center gap-0 mt-[2.5rem]'>
      <h1 className='text-[700] text-center'>Gerenciar perfil</h1>
     
        <Form className='max-[850px]:w-[35.625rem] max-[600px]:w-[20.625rem]  shadow-sm rounded-[.5rem] h-[80rem] w-[50rem] flex flex-col gap-2 bg-[#f5f5f4] p-4 mb-[4rem]'>
          <div>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome"
              value={nomeUser}
              onChange={(e) => setNomeUser(e.target.value)}
            />
          </div>

          <div>
            <Form.Label >Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o telefone"
              value={telefoneUser}
              onChange={(e) => setTelefoneUser(e.target.value)}
            />
          </div>

          <div>
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o CNPJ"
              value={cnpjUser}
              onChange={(e) => setCnpjUser(e.target.value)}
            />
          </div>

          <div>
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o login"
              value={userLogin}
              onChange={(e) => setUserLogin(e.target.value)}
            />
          </div>

          <div>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insira a senha"
              value={senhaUser}
              onChange={(e) => setSenhaUser(e.target.value)}
            />
          </div>

          <div>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Insira o email"
              value={emailUser}
              onChange={(e) => setEmailUser(e.target.value)}
            />
          </div>

          <ConsultaCep />

          <div>
            <Form.Label>N°</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o número do endereço"
              value={numeroUser}
              onChange={(e) => setNumeroUser(e.target.value)}
            />
          </div>

          <div>
            <Form.Label>Link do seu site</Form.Label>
            <Form.Control
              type="text"
              placeholder="Coloque o link do seu site"
              value={linkUser}
              onChange={(e) => setLinkUser(e.target.value)}
            />
          </div>

          <Button className='self-end mt-auto w-[10rem]' title='Finalizar Cadastro' onClick={() => updateUser()}/>
        </Form>

    </div>
      <Footer />
    </>
  );
};

export default GerenciarPerfil;
