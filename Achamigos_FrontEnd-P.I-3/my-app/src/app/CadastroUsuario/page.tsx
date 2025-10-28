'use client';

import { Button } from '../../components/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { IUser } from './IUser';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultaCep from '@/components/ConsultaCep';
import { IEndereco } from './IEndereco';

const CadastroUser = () => {
  const [nomeUser, setNomeUser] = useState<string>('');
  const [telefoneUser, setTelefoneUser] = useState<string>('');
  const [cnpjUser, setCnpjUser] = useState<string>('');
  const [userLogin, setUserLogin] = useState<string>('');
  const [senhaUser, setSenhaUser] = useState<string>('');
  const [emailUser, setEmailUser] = useState<string>('');
  const [numeroUser, setNumeroUser] = useState<string>('');
  const [tipoUser, setTipoUser] = useState<string>('');
  const [userStatus, setUserStatus] = useState<string>('');
  const [linkUser, setLinkUser] = useState<string>('');

  const createUser = async () => {
    const endereco: IEndereco = { ...window.getEndereco(), numero: numeroUser };

    const novoUser: IUser = {
      nome: nomeUser,
      telefone: telefoneUser,
      cnpj: cnpjUser,
      userLogin: userLogin,
      senha: senhaUser,
      email: emailUser,
      endereco,
      tipo: tipoUser,
      userStatus: userStatus,
      linkUser: linkUser,
    };

    try {
      const res = await axios.post('http://localhost:3002/users', novoUser);
      if (res.status === 201) {
        alert('Usuário cadastrado com sucesso!');
      } else {
        alert('Falha ao tentar cadastrar o usuário');
      }
    } catch {
      alert('Erro ao cadastrar o usuário');
    }
  };

  return (
    <>
    <Nav2 />
    <div className='flex flex-col items-center gap-0 mt-[2.5rem]'>
      <h1 className='text-[700] text-center'>Cadastre já sua ONG no Achamigos! </h1>
     
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
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o tipo de usuário"
              value={tipoUser}
              onChange={(e) => setTipoUser(e.target.value)}
            />
          </div>

          <div>
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              value={userStatus}
              onChange={(e) => setUserStatus(e.target.value)}
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

          <Button className='self-end mt-auto w-[10rem]' title='Finalizar Cadastro' onClick={() => createUser()}/>
        </Form>

    </div>
      <Footer />
    </>
  );
};

export default CadastroUser;
