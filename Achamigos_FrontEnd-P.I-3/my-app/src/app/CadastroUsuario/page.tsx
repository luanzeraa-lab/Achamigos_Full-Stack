'use client'

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState } from "react";
import { IUser } from './IUser';
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";
import ConsultaCep from '@/components/ConsultaCep';
import { IEndereco } from './IEndereco';

const CadastroUser = () => {

  const [nomeUser, setNomeUser] = useState<string>("");
  const [telefoneUser, setTelefoneUser] = useState<string>("");
  const [cnpjUser, setCnpjUser] = useState<string>("");
  const [userLogin, setUserLogin] = useState<string>("");
  const [senhaUser, setSenhaUser] = useState<string>("");
  const [emailUser, setEmailUser] = useState<string>("");
  const [numeroUser, setNumeroUser] = useState<string>("");
  const [tipoUser, setTipoUser] = useState<string>("");
  const [userStatus, setUserStatus] = useState<string>("");
  const [linkUser, setLinkUser] = useState<string>("");

  
  

  const createUser = async () => {
    const endereco: IEndereco = {...window.getEndereco(),
      numero: numeroUser};

    const novoUser: IUser = {
      nome: nomeUser,
      telefone: telefoneUser,
      cnpj: cnpjUser,
      userLogin: userLogin,
      senha: senhaUser,
      email: emailUser,
      endereco,
      tipo: tipoUser,
      userStatus : userStatus,
      linkUser: linkUser
    };

    try {
      const res = await axios.post("http://localhost:3002/users", novoUser);
      if (res.status === 201) {
        alert("Usuário cadastrado com sucesso!");
      } else {
        alert("Falha ao tentar cadastrar o usuário");
      }
    } catch {
      alert("Erro ao cadastrar o usuário");
    }
  };

  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#ffeccf]">
          <Nav2 /> 
      <Form>
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
          <Form.Label>Telefone</Form.Label>
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

        <ConsultaCep/>
        
        <div>
          <Form.Label>N°</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o Endereço"
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
            placeholder=""
            value={userStatus}
            onChange={(e) => setUserStatus(e.target.value)}
          />
        </div>

        <div>
          <Form.Label>Link do seu site</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o link do seu site"
            value={linkUser}
            onChange={(e) => setLinkUser(e.target.value)}
          />
        </div>

        <Button type="button" onClick={() => createUser()}>
          Finalizar cadastro
        </Button>
      </Form>
      <Footer />
      </div>
    </>
  )
};

export default CadastroUser;
